"use client";
import { useState } from "react";
import Button from "./Button";
import { Input } from "./Input";
import Join from "./Join";
import { Create } from "./Create";

export function FormWrapper() {
  const [selectedRoom, setSelectedRoom] = useState<"join" | "create">("join");
  const handleSelectedRoom = (room: "join" | "create") => {
    setSelectedRoom(room);
  };
  return (
    <div className="w-full">
      <div className="flex items-center text-center">
        <span
          className={`w-1/2 py-4 cursor-pointer ${
            selectedRoom === "join" && "rounded-b-lg text-primary bg-secondary"
          }`}
          onClick={() => handleSelectedRoom("join")}
        >
          Ingressar
        </span>
        <span
          className={`w-1/2 py-4 cursor-pointer ${
            selectedRoom === "create" &&
            "rounded-b-lg text-primary bg-secondary"
          }`}
          onClick={() => handleSelectedRoom("create")}
        >
          Nova reunião
        </span>
      </div>
      <div className="min-w-[580px] bg-secondary rounded-b-lg space-y-8 p-10">
        <RoomSelector selectedRoom={selectedRoom} />
      </div>
    </div>
  );
}

const RoomSelector = ({
  selectedRoom,
}: {
  selectedRoom: "join" | "create";
}) => {
  switch (selectedRoom) {
    case "join":
      return <Join />;
    case "create":
      return <Create />;
    default:
      <Join />;
  }
};
