import React, { useEffect, useMemo } from "react";
import { useAudio } from "react-use";
import { secondsToTime } from "../../utils";
import CustomRange from "../CustomRange";

import { AiOutlinePause } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import { MdPictureInPictureAlt } from "react-icons/md";
import { BiDevices } from "react-icons/bi";
import { AiOutlineFullscreen } from "react-icons/ai";
import { HiOutlineQueueList } from "react-icons/hi2";
import { RiRepeatFill } from "react-icons/ri";
import { BiShuffle } from "react-icons/bi";
import { BiSkipNext } from "react-icons/bi";
import { BiSkipPrevious } from "react-icons/bi";
import { BsVolumeMuteFill } from "react-icons/bs";
import { BsVolumeDownFill } from "react-icons/bs";
import { ImVolumeMedium } from "react-icons/im";
import { ImVolumeHigh } from "react-icons/im";
import { TbMicrophone2 } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { RiArrowUpSLine } from "react-icons/ri";
import { setControls, setPlaying, setSidebar } from "stores/player";

function Player() {
  const dispatch = useDispatch();

  const { current, sidebar } = useSelector((state) => state.player);

  const [audio, state, controls, ref] = useAudio({
    src: current?.src,
  });

  useEffect(() => {
    controls.play();
  }, [current]);

  useEffect(() => {
    dispatch(setControls(controls));
  }, []);


  useEffect(() => {
    dispatch(setPlaying(state.playing))
  },[state.playing])
  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) {
      return <BsVolumeMuteFill size={20} />;
    }
    if (state.volume > 0 && state.volume < 0.33) {
      return <BsVolumeDownFill size={22} />;
    }
    if (state.volume >= 0.33 && state.volume < 0.66)
      return <ImVolumeMedium size={16} />;

    return <ImVolumeHigh size={16} />;
  }, [state.volume, state.muted]);

  const playIcon = useMemo(() => {
    if (state.paused === true) {
      return <AiOutlinePause />;
    }

    if (state.paused === false) {
      return <BsPlayFill size={24} />;
    }
  }, [state.paused]);

  return (
    <div className="flex px-4 justify-between items-center h-full">
      <div className="min-w-[11.25rem] w-[30%]">
        {current && (
          <div className="flex items-center">
            <div className="flex items-center mr-3">
              {!sidebar && (
                <div className="w-14 h-14 mr-3 flex-shrink-0 group relative">
                  <img src={current.image} alt="" />
                  <button 
                  onClick={() => dispatch(setSidebar(true))}
                  className="w-6 h-6 rounded-full absolute top-1 right-1 bg-black opacity-0 group-hover:opacity-60 hover:!opacity-100 flex items-center hover:scale-[1.06] justify-center">
                    <RiArrowUpSLine size={16} />
                  </button>
                </div>
              )}

              <div>
                <h6 className="text-sm line-clamp-1">{current.title}</h6>
                <p className="text-[0.688rem] text-white text-opacity-70">
                  {current.artist}
                </p>
              </div>
            </div>

            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <BsFillHeartFill size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <MdPictureInPictureAlt size={16} />
            </button>
          </div>
        )}
      </div>

      <div className="max-w-[45.125rem] w-[40%] flex flex-col px-4 items-center">
        <div className="flex items-center gap-x-2">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <BiShuffle size={18} />
          </button>

          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <BiSkipPrevious size={24} />
          </button>

          <button
            onClick={controls[state?.playing ? "pause" : "play"]}
            className="w-8 h-8 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.06]"
          >
            {playIcon}
          </button>

          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <BiSkipNext size={24} />
          </button>

          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <RiRepeatFill size={16} />
          </button>
        </div>

        <div className="w-full flex items-center gap-x-2">
          {audio}
          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.time)}
          </div>

          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />

          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.duration)}
          </div>
        </div>
      </div>

      <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <TbMicrophone2 size={16} />
        </button>

        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <HiOutlineQueueList size={16} />
        </button>

        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <BiDevices size={16} />
        </button>

        <button
          onClick={controls[state.muted ? "unmute" : "mute"]}
          className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
        >
          {volumeIcon}
        </button>

        <div className="w-[5.813rem] max-w-full ">
          <CustomRange
            step={0.01}
            min={0}
            max={1}
            value={state.muted ? 0 : state?.volume}
            onChange={(value) => {
              controls.unmute();
              controls.volume(value);
            }}
          />
        </div>

        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <AiOutlineFullscreen size={16} />
        </button>
      </div>
    </div>
  );
}

export default Player;
