import { useState } from 'react'
import { Link } from 'react-router-dom'
import {IPost} from '../models'
interface PostProps {
    post: IPost
}

export function Post({post}: PostProps) {
    const [body, setBody] = useState(false)
    const btnBgClassName = body ? 'bg-red-400' : 'bg-green-400'
    const btnClasses = ['py-2 px-4 border', btnBgClassName]
    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      
        <p><Link to={{
            pathname: `/post/${post.id}`,
        }}>{post.title}</Link></p> 
        <button
        className={btnClasses.join(' ')}
        onClick={() => setBody(prev => !prev)}
        >
        {body ? 'Скрыть текст' : 'Показать текст'}</button> 
    
        { body && <div>
            <p>{ post.body }</p>
            <p>Reactions:<span style={{ fontWeight: 'bold' }}> {post.reactions}</span></p>
            </div>  }  
        </div> 
        
    )
}