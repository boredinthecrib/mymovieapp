export default function HomePage() {
  const userName = localStorage.getItem("username") || "";

  return (
    <div className="welcome">
      <h3> {userName ? `Welcome, ${userName}!` : "Welcome, Guest!"}</h3>
    </div>
  );
}
