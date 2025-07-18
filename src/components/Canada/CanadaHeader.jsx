import BgImg from "../../assets/Logo/headerimage.jpg";

export default function CanadaHeader() {
  return (
    <div
      className="w-full h-[300px] bg-cover bg-center flex items-center justify-between"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0.1)), url(${BgImg})`,
      }}
    >
      <div className="container mx-auto">
        <h1 className="text-6xl font-bold px-30 text-white">Canada</h1>
      </div>
    </div>
  );
}
