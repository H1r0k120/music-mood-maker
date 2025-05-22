// app/page.tsx
"use client";

import React, { useState } from "react";

type MoodId =
  | "relax"
  | "energetic"
  | "focus"
  | "sad"
  | "night"
  | "excited"
  | "healing"
  | "adventure";

const moodDetails: Record<
  MoodId,
  { description: string; playlistUrl: string }
> = {
  relax: {
    description: "リラックスしたい時にピッタリの曲たちです。",
    playlistUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3Ogo9pFvBkY",
  },
  energetic: {
    description: "元気いっぱいになれるアップビートな曲を集めました。",
    playlistUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC",
  },
  focus: {
    description: "集中力アップに効果的なインストゥルメンタルをどうぞ。",
    playlistUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX8NTLI2TtZa6",
  },
  sad: {
    description: "悲しい気分のときに寄り添うしっとり曲です。",
    playlistUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DWVrtsSlLKzro",
  },
  night: {
    description: "夜の静けさに合うムーディーなプレイリスト。",
    playlistUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO",
  },
  excited: {
    description: "ワクワクする気持ちを盛り上げる曲を集めました。",
    playlistUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX1BzILRveYHb",
  },
  healing: {
    description: "癒しのサウンドでリフレッシュしませんか？",
    playlistUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3Ogo9pFvBkY",
  },
  adventure: {
    description: "冒険気分を高めるエネルギッシュな曲たち。",
    playlistUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX6VdMW310YC7",
  },
};

const moods: { id: MoodId; label: string; color: string }[] = [
  { id: "relax", label: "リラックス", color: "bg-green-400" },
  { id: "energetic", label: "元気", color: "bg-yellow-400" },
  { id: "focus", label: "集中", color: "bg-blue-400" },
  { id: "sad", label: "悲しい", color: "bg-gray-500" },
  { id: "night", label: "夜", color: "bg-indigo-700" },
  { id: "excited", label: "わくわく", color: "bg-pink-400" },
  { id: "healing", label: "癒し", color: "bg-teal-400" },
  { id: "adventure", label: "冒険", color: "bg-red-400" },
];

export default function Page() {
  const [selectedMood, setSelectedMood] = useState<MoodId | null>(null);

  const selectedMoodData = selectedMood
    ? moods.find((m) => m.id === selectedMood)
    : null;

  return (
    <div
      className={`min-h-screen p-6 flex flex-col items-center justify-start transition-colors duration-500 ${
        selectedMoodData?.color ?? "bg-white"
      }`}
    >
      <h1 className="text-3xl font-bold mb-8 text-gray-900">音楽気分メーカー</h1>

      <div className="grid grid-cols-4 gap-4 max-w-xl w-full">
        {moods.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setSelectedMood(id)}
            className={`rounded-full py-4 px-6 font-semibold text-white shadow-lg hover:scale-110 transform transition-transform duration-300 ${
              selectedMood === id
                ? "ring-4 ring-white ring-offset-2"
                : "bg-gray-400"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {selectedMood && (
        <div className="mt-12 p-6 bg-white rounded-lg shadow-lg max-w-xl w-full text-gray-800">
          <h2 className="text-2xl font-bold mb-4">
            {selectedMoodData?.label} のプレイリスト
          </h2>
          <p className="mb-6">{moodDetails[selectedMood].description}</p>
          <iframe
            src={moodDetails[selectedMood].playlistUrl}
            width="100%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            title="Spotify Playlist"
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
