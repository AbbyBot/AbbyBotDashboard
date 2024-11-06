import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import notFound from '../../assets/image-not-found.png'
import Card from '../../components/Card'
import BotStatus from '../../components/BotStatus'
import { useNavigate } from 'react-router-dom'
import Error from '../../components/Error'
import { BotContext } from '../../context/BotProvider'

const NoServers = () => {
  return <div className='p-4'>
    <p className='text-tertiary'>
      It seems you do not have AbbyBot on any server, nor are you on a server where AbbyBot is.
      <br />
    </p>
    <button className="btn-primary">Add AbbyBot now!</button>
  </div>
}

const ServersList = ({ servers }) => {
  const redirect = useNavigate()

  return <div className='d-flex gap-3 flex-wrap'>
    {servers.map((server, index) => <button key={`server-${index}`} onClick={() => redirect(`/dashboard/manage-servers?guild_id=${server.guild_id}`)} className='rounded flex-column btn-link p-3 border text-light'>
      <img draggable='false' className='rounded' width={150} src={server.guild_icon_url ? server.guild_icon_url : notFound} alt="" />
      {server.guild_name}
    </button>)}

  </div>
}

/* Main Component */
export default function Welcome() {
  const { user, error } = useContext(AuthContext)
  const botContext = useContext(BotContext)

  const getStatus = async () => await botContext.getStatus()

  useEffect(() => {
    
  }, []) 

  if (error) {
    return <Error message='Something went wrong! Try again later' error={error.response.data.error} />
  }

  if (!user) {
    return <h1>loading...</h1>
  }

  return (
    <section className='d-flex gap-2 flex-wrap'>
      <Card className='flex-grow-1' style={{flexBasis: '70%'}}>
        <div className='text-light fs-4'>
          <strong>Welcome to dashboard, </strong>
          <i className='text-tertiary'>{user.data.username}</i>
          <br />
          <small>{user.data.email}</small>
        </div>
      </Card>
      <Card className='flex-grow-1'>
        <h1 className='m-1'>AbbyBot's status</h1>
        <BotStatus status={botContext.status} />
      </Card>
      <Card className='flex-grow-1' style={{flexBasis: '100%'}}>
        <h1 className='m-1'>Select a guild</h1>
        <p className='m-1'>The system will only show servers where you are joined and AbbyBot is also present. If your server does not appear, please reload the page.</p>
        {user.abbybot.userServers.servers.length ? (
          <ServersList servers={user.abbybot.userServers.servers} />
        ) : (
          <NoServers />
        )}
      </Card>
      <Card>
        <span className='fs-4 d-flex gap-2 flex-center-items'>
          <h1 className='m-1'>Servers with AbbyBot</h1>
          <strong className='text-tertiary'>{user.abbybot.userServers.servers.length}</strong>
        </span>
      </Card>
    </section>
  );
  
}
