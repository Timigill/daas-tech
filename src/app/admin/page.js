import MeetingsList from "./MeetingsList";
import QuotesList from "./QuotesList";

export default function AdminDashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>
      
      <div style={{ marginBottom: "40px" }}>
        <QuotesList />
      </div>
      
      <div>
        <MeetingsList />
      </div>
    </div>
  );
}
