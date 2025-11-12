import { StatCard } from "@/components/admin/StatCard";
import { DataTable } from "@/components/admin/DataTable";
import { 
  Building2, 
  Users, 
  Calendar, 
  Activity,
  TrendingUp,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";

const recentAppointments = [
  { id: "A001", patient: "John Doe", doctor: "Dr. Smith", time: "10:30 AM", status: "Confirmed" },
  { id: "A002", patient: "Jane Smith", doctor: "Dr. Johnson", time: "11:00 AM", status: "Pending" },
  { id: "A003", patient: "Robert Brown", doctor: "Dr. Williams", time: "2:00 PM", status: "Confirmed" },
  { id: "A004", patient: "Emily Davis", doctor: "Dr. Jones", time: "3:30 PM", status: "Cancelled" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard Overview</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
        </div>
        <Button className="bg-gradient-primary text-white shadow-glow hover:opacity-90 transition-opacity rounded-xl">
          <TrendingUp className="w-4 h-4 mr-2" />
          Generate Report
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Hospitals"
          value="156"
          icon={Building2}
          trend="+12% from last month"
          trendUp={true}
          gradient="bg-gradient-primary"
        />
        <StatCard
          title="Active Patients"
          value="2,847"
          icon={Users}
          trend="+8% from last month"
          trendUp={true}
          gradient="bg-gradient-accent"
        />
        <StatCard
          title="Appointments Today"
          value="89"
          icon={Calendar}
          trend="-3% from yesterday"
          trendUp={false}
          gradient="bg-gradient-to-br from-purple-500 to-pink-500"
        />
        <StatCard
          title="Emergency Calls"
          value="24"
          icon={Activity}
          trend="+15% from yesterday"
          trendUp={true}
          gradient="bg-gradient-to-br from-orange-500 to-red-500"
        />
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-foreground">Recent Appointments</h2>
            <Button variant="ghost" className="text-primary hover:bg-primary/10 rounded-lg">
              View All
            </Button>
          </div>
          <DataTable
            columns={[
              { key: "id", label: "ID" },
              { key: "patient", label: "Patient" },
              { key: "doctor", label: "Doctor" },
              { key: "time", label: "Time", render: (value) => (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  {value}
                </div>
              )},
              { 
                key: "status", 
                label: "Status",
                render: (value) => (
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    value === 'Confirmed' ? 'bg-green-100 text-green-700' :
                    value === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {value}
                  </span>
                )
              },
            ]}
            data={recentAppointments}
            onEdit={() => {}}
            onView={() => {}}
          />
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6 hover-glass">
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button className="w-full justify-start bg-gradient-primary text-white shadow-glow hover:opacity-90 rounded-xl">
                <Building2 className="w-4 h-4 mr-2" />
                Add Hospital
              </Button>
              <Button className="w-full justify-start bg-gradient-accent text-white shadow-glow hover:opacity-90 rounded-xl">
                <Users className="w-4 h-4 mr-2" />
                Register Patient
              </Button>
              <Button className="w-full justify-start bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-glow hover:opacity-90 rounded-xl">
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
            </div>
          </div>

          <div className="glass-card p-6 hover-glass">
            <h3 className="text-lg font-semibold text-foreground mb-4">System Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Server Status</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium">Online</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Database</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium">Healthy</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">API Status</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
