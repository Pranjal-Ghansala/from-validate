import { useParams } from 'react-router-dom';

export default function Welcome() {
  const { username } = useParams();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-emerald-500 text-white">
      <h1 className="text-4xl font-bold mb-4">Hello, {username} 👋</h1>
      <p className="text-xl">Welcome aboard! 🎉</p>
    </div>
  );
}
