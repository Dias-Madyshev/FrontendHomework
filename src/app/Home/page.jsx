import Button from "../components/Button";
import Input from "../components/Input";

export default function Каталог() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="text-center p-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Начните головокружительную <br /> карьеру в ИТ
        </h1>
        <p className="text-lg lg:text-xl mb-8 font-bold">
          Наши выпускники успешно работают в Apple, Google, Facebook
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
          <Input placeholder="Имя"></Input>
          <Input placeholder="Номер Телефона"></Input>
          <Button></Button>
        </div>
        <div className="w-full max-w-[1000px] mx-auto mb-4">
          <img
            src="https://framerusercontent.com/images/F6zn3wYuthzj0Iq3EQ6tTrXzR6w.jpg?scale-down-to=2048"
            alt="фото"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
