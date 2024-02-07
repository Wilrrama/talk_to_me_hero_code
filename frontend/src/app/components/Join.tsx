"use client";
import { useRef } from "react";
import Button from "./Button";
import { Input } from "./Input";

export function Join() {
  const name = useRef<HTMLInputElement>(null);
  const id = useRef<HTMLInputElement>(null);
  return (
    <>
      <Input placeholder="Seu nome" type="text" ref={name} />
      <Input placeholder="Id da reunião" type="text" ref={id} />
      <Button title="Entrar" type="button" />
    </>
  );
}
