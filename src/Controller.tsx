import { useEffect, useState } from "react";
import { getDatabase, onValue, ref, update } from "firebase/database";

// import ip from "ip";

// 再利用可能なコンポーネント
const TeamInput = ({
  label,
  value,
  onChange,
  color,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  color: "blue" | "orange";
  placeholder: string;
}) => {
  const colorClasses = {
    blue: {
      bg: "bg-blue-500/20",
      border: "border-blue-400/30",
      label: "text-blue-200",
      input:
        "bg-blue-500/20 border-blue-400/40 placeholder-blue-200/60 focus:ring-blue-400/50 focus:border-blue-300",
    },
    orange: {
      bg: "bg-orange-500/20",
      border: "border-orange-400/30",
      label: "text-orange-200",
      input:
        "bg-orange-500/20 border-orange-400/40 placeholder-orange-200/60 focus:ring-orange-400/50 focus:border-orange-300",
    },
  };

  const classes = colorClasses[color];

  return (
    <div
      className={`${classes.bg} backdrop-blur-sm rounded-2xl p-6 border ${classes.border}`}
    >
      <label className={`block ${classes.label} font-semibold text-lg mb-3`}>
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full ${classes.input} text-white rounded-xl px-4 py-3 focus:ring-3 transition-all duration-300`}
      />
    </div>
  );
};

const ScoreCounter = ({
  label,
  value,
  onIncrement,
  onDecrement,
  color,
}: {
  label: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  color: "blue" | "orange";
}) => {
  const colorClasses = {
    blue: {
      bg: "bg-blue-500/20",
      border: "border-blue-400/30",
      label: "text-blue-200",
      button: "bg-blue-600/60 hover:bg-blue-600/80",
      inner: "bg-blue-500/20 border-blue-400/40",
      display: "bg-blue-500/10",
    },
    orange: {
      bg: "bg-orange-500/20",
      border: "border-orange-400/30",
      label: "text-orange-200",
      button: "bg-orange-600/60 hover:bg-orange-600/80",
      inner: "bg-orange-500/20 border-orange-400/40",
      display: "bg-orange-500/10",
    },
  };

  const classes = colorClasses[color];

  return (
    <div
      className={`${classes.bg} backdrop-blur-sm rounded-2xl p-6 border ${classes.border}`}
    >
      <label className={`block ${classes.label} font-semibold text-lg mb-3`}>
        {label}
      </label>
      <div
        className={`flex items-center ${classes.inner} rounded-xl border overflow-hidden`}
      >
        <button
          type="button"
          onClick={onDecrement}
          className={`ml-2 ${classes.button} text-white p-4 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M20 12H4"
            />
          </svg>
        </button>
        <div
          className={`flex-1 text-center text-white font-bold text-3xl py-4 ${classes.display}`}
        >
          {value}
        </div>
        <button
          type="button"
          onClick={onIncrement}
          className={`mr-2 ${classes.button} text-white p-4 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const FormatSelector = ({
  value,
  onChange,
  options,
  label = "⚔️ Match Format"
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  label?: string;
}) => {
  return (
    <div className="mb-8">
      <label className="block text-white font-semibold text-lg mb-3">
        {label}
      </label>
      <div className="flex gap-4 justify-center flex-wrap">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
              value === option
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105"
                : "bg-white/20 text-white/80 hover:bg-white/30 hover:scale-105"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

type MatchInfoType = {
  title: string;
  blue_teamName: string;
  orange_teamName: string;
  blue_setPoint: number;
  orange_setPoint: number;
  bo: string;
};

const Controller = () => {
  const [title, setTitle] = useState("");
  const [blueTeamName, setBlueTeamName] = useState("");
  const [orangeTeamName, setOrangeTeamName] = useState("");
  const [blueSetPoint, setBlueSetPoint] = useState(0);
  const [orangeSetPoint, setOrangeSetPoint] = useState(0);
  const [bo, setBo] = useState<string>("Bo1");

  const db = getDatabase();
  const dataRef = ref(db, "match_info");
  useEffect(() => {
    const listener = onValue(dataRef, (snapshot) => {
      const data: MatchInfoType = snapshot.val();
      setTitle(data.title);
      setBlueTeamName(data.blue_teamName);
      setOrangeTeamName(data.orange_teamName);
      setBlueSetPoint(data.blue_setPoint);
      setOrangeSetPoint(data.orange_setPoint);
      setBo(data.bo);
      console.log(data);
    });
    return () => {
      console.log("unmount");
      listener();
    };
  }, [dataRef]);
  const submit = () => {
    const sendData: MatchInfoType = {
      title,
      blue_teamName: blueTeamName,
      orange_teamName: orangeTeamName,
      blue_setPoint: blueSetPoint,
      orange_setPoint: orangeSetPoint,
      bo,
    };
    update(dataRef, sendData);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* ヘッダー */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400 mb-4">
            🎮 Match Controller
          </h1>
          <p className="text-white/80 text-lg">
            Manage your tournament matches with style
          </p>
        </div>

        {/* メインカード */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
          {/* タイトル入力 */}
          <div className="mb-8">
            <label className="block text-white font-semibold text-lg mb-3">
              🏆 Match Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter match title..."
              className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 text-lg rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-300 hover:bg-white/25"
            />
          </div>

          {/* チーム入力セクション */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <TeamInput
              label="🔵 Blue Team"
              value={blueTeamName}
              onChange={(e) => setBlueTeamName(e.target.value)}
              color="blue"
              placeholder="Blue team name..."
            />
            <TeamInput
              label="🟠 Orange Team"
              value={orangeTeamName}
              onChange={(e) => setOrangeTeamName(e.target.value)}
              color="orange"
              placeholder="Orange team name..."
            />
          </div>

          {/* スコアセクション */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <ScoreCounter
              label="🔵 Blue Score"
              value={blueSetPoint}
              onIncrement={() => setBlueSetPoint((c) => c + 1)}
              onDecrement={() => setBlueSetPoint((c) => Math.max(0, c - 1))}
              color="blue"
            />
            <ScoreCounter
              label="🟠 Orange Score"
              value={orangeSetPoint}
              onIncrement={() => setOrangeSetPoint((c) => c + 1)}
              onDecrement={() => setOrangeSetPoint((c) => Math.max(0, c - 1))}
              color="orange"
            />
          </div>

          {/* BO選択 */}
          <FormatSelector 
            value={bo} 
            onChange={setBo}
            options={["Bo1", "Bo3", "Bo5"]}
          />

          {/* 送信ボタン */}
          <div className="text-center">
            <button
              type="button"
              onClick={submit}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-xl px-12 py-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-green-500/25 active:scale-95 border border-green-400/30"
            >
              🚀 Update Match Info
            </button>
          </div>
        </div>

        {/* フッター */}
        <div className="text-center mt-8">
          <p className="text-white/60 text-sm">
            Real-time match control powered by Firebase
          </p>
          <p className="text-white/40 text-xs mt-2">
            dev by Kazuryu
          </p>
        </div>
      </div>
    </div>
  );
};

export default Controller;
