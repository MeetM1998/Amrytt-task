import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";
import Chart from "../components/Chart";
import Footer from "../components/Footer";
import Header from "../components/Header";
import List from "../components/List";
import Table from "../components/Table";

const Dashboard = () => {
  const [profiles, setProfiles] = useState([]);
  const [users, setUsers] = useState();
  const { state } = useLocation();

  useEffect(() => {
    const savedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];
    setProfiles(savedProfiles);
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(savedUsers);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome, {state?.username}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card title="Total Users" content={users?.length} />
          <Card title="Total Created Profiles" content={profiles?.length} />
          <Card title="New Signups" content={1} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Chart />
          <List profiles={profiles} />
        </div>
        <Table profiles={profiles} setProfiles={setProfiles} />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
