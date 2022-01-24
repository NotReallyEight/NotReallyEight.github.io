import { FC } from 'react';

const Title: FC<{ title: string }> = ({ title }) => {
  return (
    <div>
      <header className='Title'>
        <h1>{title}</h1>
      </header>
    </div>
  )
}

export default Title;