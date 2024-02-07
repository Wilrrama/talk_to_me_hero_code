"use client";
import Mic from "@/Icons/Mic";
import Computer from "@/Icons/Computer";
import Camera from "@/Icons/Camera";
import Fone from "@/Icons/Fone";
import Container from "./Container";
import React, { useState } from "react";
import Novideo from "../../Icons/Novideo";
import Nofone from "@/Icons/Nofone";
import Nocamera from "@/Icons/Nocamera";

export default function Footer() {
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return (
    <div className="fixed bottom-0 bg-black py-6 w-full">
      <Container>
        <div className="grid grid-cols-3">
          <div className="flex items-center">
            <span className="text-xl">
              {hours}:{minutes}
            </span>
          </div>
          <div className="flex space-x-6 justify-center">
            {isMuted ? (
              <Nofone
                className="h-12 w-16 text-white p-2 cursor-pointer bg-red-500 rounded-md"
                onClick={() => setIsMuted(!isMuted)}
              />
            ) : (
              <Mic
                className="h-12 w-16 text-white p-2 cursor-pointer bg-gray-950 rounded-md"
                onClick={() => setIsMuted(!isMuted)}
              />
            )}

            {isCameraOff ? (
              <Nocamera
                className="h-12 w-16 text-white p-2 cursor-pointer bg-red-500 rounded-md"
                onClick={() => setIsCameraOff(!isCameraOff)}
              />
            ) : (
              <Camera
                className="h-12 w-16 text-white p-2 cursor-pointer bg-gray-950 rounded-md"
                onClick={() => setIsCameraOff(!isCameraOff)}
              />
            )}

            {isScreenSharing ? (
              <Novideo
                className="h-12 w-16 text-white p-2 cursor-pointer bg-red-500 rounded-md"
                onClick={() => setIsScreenSharing(!isScreenSharing)}
              />
            ) : (
              <Computer
                className="h-12 w-16 text-white p-2 cursor-pointer bg-gray-950 rounded-md"
                onClick={() => setIsScreenSharing(!isScreenSharing)}
              />
            )}

            <Fone className="h-12 w-16 text-white hover:bg-red-500 p-2 cursor-pointer bg-primary rounded-md" />
          </div>
        </div>
      </Container>
    </div>
  );
}
