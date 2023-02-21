import React from 'react'
import { NavLink } from "react-router-dom";
import {BsPlayFill} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import {setCurrent} from "stores/player"
import { AiOutlinePause } from "react-icons/ai";


function SongItem( {item}) {

    const dispatch = useDispatch()
    const {current, playing, controls} = useSelector(state => state.player) 

    const imageStyle = item => {
        switch (item.type) {
          case 'artist':
            return 'rounded-full';
            
            case 'podcast':
              return 'rounded-lg'
            
            default:
              return 'rounded'
              
        }
      }

      const updateCurrent = () => {
        if(current.id === item.id) {
          if(playing) {
            controls.pause()
          }else {
            controls.play()
          }
        }else {

          dispatch(setCurrent(item))
        }
      }
      
      const isCurrentitem = (current?.id === item.id && playing)

  return (
    <NavLink
            key={item.id}
            to="/"
            className={"bg-footer p-4 rounded hover:bg-active group"}
          >
            <div className="pt-[100%] relative">
              <img
                src={item.image}
                className={`absolute inset-0 object-cover w-full h-full ${imageStyle(item)}`}
              />

              <button
              onClick={updateCurrent}
              className={`w-10 h-10 rounded-full bg-primary absolute right-2 bottom-2 group-hover:flex group-focus:flex items-center justify-center ${!isCurrentitem ? 'hidden' : 'flex'}`}
              >
              {
                isCurrentitem ?  <BsPlayFill size={16}/> : <AiOutlinePause size={16} />
              }
              </button>

            </div>
            <h6 className="overflow-hidden overflow-elipsis whitespace-nowrap text-base font-semibold">
              {item.title}
            </h6>
            <p className="line-clamp-2 text-link text-sm mt-1">
              {item.description}
            </p>
          </NavLink>
  )
}

export default SongItem