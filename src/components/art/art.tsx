import React, {useEffect} from "react";
import {InstaEmbed} from "../insta-embed";

export const Art = () => {

  useEffect(() => {
    // @ts-ignore
    window.instgrm?.Embeds.process()
  })
  return (
    <div>
      <div className={"h3"}>My Art</div>

      <div style={{marginLeft: "auto"}}>
        <InstaEmbed/>
      </div>
    </div>
  )
}