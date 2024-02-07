import Button from "./components/Button";
import Container from "./components/Container";
import Header from "./components/Header";
import { Input } from "./components/Input";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className=" mx-auto w-full h-full flex flex-1 items-center justify-center">
        {/* <Container> */}
        <div>
          <div className="flex items-center text-center">
            <span className="bg-secondary w-1/2 py-4 rounded-b-lg text-primary">
              Ingressar
            </span>
            <span className="w-1/2">Nova reunião</span>
          </div>
          <div className="min-w-[580px] bg-secondary rounded-b-lg space-y-8 p-10">
            <Input placeholder="Seu nome" type="text" />
            <Input placeholder="Id da reunião" type="text" />
            <Button title="Entrar" type="button" />
          </div>
        </div>
      </div>
      {/* </Container> */}
    </main>
  );
}
