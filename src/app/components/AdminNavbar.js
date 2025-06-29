"use client";

import React from 'react';
import Link from 'next/link';

const AdminNavbar = () => {
  return (
    <nav style={{
      background: '#222',
      color: '#fff',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Admin Dashboard</div>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link href="/admin/dashboard" style={{ color: '#fff', textDecoration: 'none' }}>Dashboard</Link>
        <Link href="/admin/users" style={{ color: '#fff', textDecoration: 'none' }}>Users</Link>
        <Link href="/admin/settings" style={{ color: '#fff', textDecoration: 'none' }}>Settings</Link>
        <Link href="/logout" style={{ color: '#fff', textDecoration: 'none' }}>Logout</Link>
      </div>
    </nav>
  );
};

export default AdminNavbar;
