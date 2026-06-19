import React, { useState } from "react";

const sections = [
  {
    id: "account",
    title: "Account",
    defaultOpen: true,
    rows: [
      { label: "Google Account", desc: "Manage your Google Account settings", type: "link", value: "Manage" },
      { label: "Paid memberships", desc: "Manage your YouTube subscriptions and memberships", type: "link", value: "Manage" },
      { label: "Your YouTube channel", desc: "View or create a YouTube channel", type: "link", value: "View" },
    ],
  },
  {
    id: "notifications",
    title: "Notifications",
    defaultOpen: true,
    rows: [
      { divider: "Email notifications" },
      { label: "Your activity", desc: "Recommended videos, activity on your comments, and more", type: "toggle", defaultOn: true },
      { label: "Activity on my channel", desc: "Comments on your videos, shares, new subscribers", type: "toggle", defaultOn: true },
      { label: "Activity on my comments", desc: "Replies and likes on your comments", type: "toggle", defaultOn: false },
      { divider: "General notification settings" },
      {
        label: "Scheduled digest",
        desc: "Receive a daily or weekly email with recommended videos",
        type: "select",
        options: ["None", "Daily", "Weekly"],
        defaultVal: "Weekly",
      },
    ],
  },
  {
    id: "playback",
    title: "Playback and performance",
    defaultOpen: true,
    rows: [
      { label: "Autoplay next video", desc: "Automatically play the next video or related content", type: "toggle", defaultOn: true },
      { label: "Autoplay on Home", desc: "Preview videos when you hover over them on Home", type: "toggle", defaultOn: true },
      { label: "Always show captions", desc: "Show captions for every video you watch", type: "toggle", defaultOn: false },
      { label: "Show captions in a different language", type: "link", value: "Turn on" },
      { label: "Caption size and style", type: "link", value: "Default" },
    ],
  },
  {
    id: "privacy",
    title: "Privacy",
    defaultOpen: false,
    rows: [
      { label: "Keep all my liked videos private", desc: "Others won't be able to see your liked videos", type: "toggle", defaultOn: false },
      { label: "Keep all my saved playlists private", desc: "Others won't be able to see playlists you've saved", type: "toggle", defaultOn: false },
      { label: "Keep all my subscriptions private", desc: "Only you can see the channels you subscribe to", type: "toggle", defaultOn: true },
    ],
  },
  {
    id: "appearance",
    title: "Appearance",
    defaultOpen: false,
    rows: [
      { label: "Dark theme", desc: "Turn on to use dark mode", type: "toggle", defaultOn: false },
      { label: "Default theme", desc: "YouTube picks the best theme for you", type: "toggle", defaultOn: true },
    ],
  },
  {
    id: "language",
    title: "Language and region",
    defaultOpen: false,
    rows: [
      { label: "Language", desc: "Choose your preferred language for YouTube", type: "select", options: ["English (US)", "Hindi", "Bengali", "Spanish", "French"], defaultVal: "English (US)" },
      { label: "Location", desc: "Your country for trending content", type: "select", options: ["India", "United States", "United Kingdom"], defaultVal: "United States" },
      { label: "Restricted Mode", desc: "Filter out potentially mature content", type: "toggle", defaultOn: false },
    ],
  },
  {
    id: "connected",
    title: "Connected apps",
    defaultOpen: false,
    rows: [
      { label: "Manage connected apps", desc: "See which apps are connected to your YouTube account", type: "link", value: "Manage" },
    ],
  },
  {
    id: "billing",
    title: "Billing and payments",
    defaultOpen: false,
    rows: [
      { label: "View purchase history", type: "link", value: "View" },
      { label: "Manage payment methods", type: "link", value: "Manage" },
    ],
  },
];

const Toggle = ({ defaultOn }) => {
  const [on, setOn] = useState(defaultOn);
  return (
    <button
      onClick={() => setOn(!on)}
      className={`relative inline-flex items-center w-9 h-5 rounded-full transition-colors flex-shrink-0 ${on ? "bg-blue-600" : "bg-gray-400"}`}
      aria-pressed={on}
    >
      <span
        className={`inline-block w-4 h-4 bg-white rounded-full shadow transform transition-transform ${on ? "translate-x-4" : "translate-x-0.5"}`}
      />
    </button>
  );
};

const SelectControl = ({ options, defaultVal }) => {
  const [val, setVal] = useState(defaultVal);
  return (
    <select
      value={val}
      onChange={(e) => setVal(e.target.value)}
      className="text-sm border border-gray-300 rounded px-2 py-1.5 bg-white ml-4 cursor-pointer text-gray-900"
    >
      {options.map((o) => <option key={o}>{o}</option>)}
    </select>
  );
};

const SettingRow = ({ row }) => {
  if (row.divider) {
    return (
      <div className="px-6 py-2 bg-gray-50">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{row.divider}</span>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-between px-6 py-3.5 border-b border-gray-100 last:border-b-0 hover:bg-gray-50">
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900">{row.label}</p>
        {row.desc && <p className="text-xs text-gray-500 mt-0.5">{row.desc}</p>}
      </div>
      {row.type === "toggle" && <Toggle defaultOn={row.defaultOn} />}
      {row.type === "link" && (
        <button className="text-sm text-blue-600 hover:underline ml-4 flex-shrink-0">{row.value}</button>
      )}
      {row.type === "select" && <SelectControl options={row.options} defaultVal={row.defaultVal} />}
    </div>
  );
};

const Section = ({ section }) => {
  const [open, setOpen] = useState(section.defaultOpen);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-100 transition-colors"
      >
        <span className="text-sm text-gray-900">{section.title}</span>
        <span className={`text-gray-500 text-lg transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          &#8964;
        </span>
      </button>
      {open && (
        <div className="border-t border-gray-200">
          {section.rows.map((row, i) => <SettingRow key={i} row={row} />)}
        </div>
      )}
    </div>
  );
};

const Settings = () => (
  <div className="max-w-3xl mx-auto px-6 py-6">
    <h1 className="text-xl font-normal text-gray-900 mb-5">Settings</h1>
    {sections.map((s) => <Section key={s.id} section={s} />)}
  </div>
);

export default Settings;