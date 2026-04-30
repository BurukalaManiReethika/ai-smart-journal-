export default function NotificationToast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed top-4 right-4 bg-indigo-500 p-3 rounded shadow-lg animate-bounce">
      🔔 {message}
    </div>
  );
}
