import React from "react";
import {
    FiSun, FiSearch, FiMic, FiMoon, FiVolume2, FiVolumeX,
} from "react-icons/fi";
import { BsFillSkipBackwardFill, BsFillPlayFill, BsFillSkipForwardFill } from "react-icons/bs";
import { TbWindow } from "react-icons/tb";

const topRow = [
    { icon: null, label: 'esc' },
    { icon: <FiSun size={16} />, label: 'F1' },
    { icon: <FiSun size={14} />, label: 'F2' },
    { icon: <TbWindow size={14} />, label: 'F3' },
    { icon: <FiSearch size={14} />, label: 'F4' },
    { icon: <FiMic size={14} />, label: 'F5' },
    { icon: <FiMoon size={14} />, label: 'F6' },
    { icon: <BsFillSkipBackwardFill size={14} />, label: 'F7' },
    { icon: <BsFillPlayFill size={14} />, label: 'F8' },
    { icon: <BsFillSkipForwardFill size={14} />, label: 'F9' },
    { icon: <FiVolumeX size={14} />, label: 'F10' },
    { icon: <FiVolume2 size={14} />, label: 'F11' },
    { icon: <FiVolume2 size={14} />, label: 'F12' },
    { icon: null, label: '' },
];

const restKeys = [
    ['~\n`', '!\n1', '@\n2', '#\n3', '$\n4', '%\n5', '^\n6', '&\n7', '*\n8', '(\n9', ')\n0', '_\n-', '+\n=', 'delete'],
    ['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{\n[', '}\n]', '|\\'],
    ['caps lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':\n;', '"\n\'', 'return'],
    ['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<\n,', '>\n.', '?\n/', 'shift'],
    ['fn', 'control', 'option', 'command', 'space', 'command', 'option', '←', '↑', '↓', '→'],
];

const getKeyWidth = (key: string) => {
    const wideKeys: Record<string, string> = {
        'tab': 'w-20',
        'caps lock': 'w-26',
        'shift': 'w-36',
        'delete': 'w-20',
        'return': 'w-26',
        'command': 'w-20',
        'control': 'w-26',
        'option': 'w-24',
        'fn': 'w-14',
        'space': 'flex-1 h-12',
    };
    return wideKeys[key] || 'w-16';
};

const arrowKey = (key: string) => {
    const wideKeys: Record<string, string> = {
        '↑': 'h-8',
        '↓': 'h-8'
    };
    return wideKeys[key] || 'h-16';
}

const Keyboard = function () {
    return (
        <>
            <div className="flex flex-col bg-gray-900 p-4 rounded-lg">
                <div className="flex justify-center gap-2 w-full p-4">
                    {topRow.map((key, index) => (
                        <div key={index} className="flex flex-col items-center text-white text-xs w-16 h-16 bg-[#111] rounded-lg border border-neutral-700 hover:bg-[#1d1d1d] transition select-none justify-center shadow-lg shadow-gray-50">
                            <div className="flex flex-col items-center gap-1"><span className="pb-1">{key.icon}</span><span className="">{key.label}</span></div>
                        </div>
                    ))}
                </div>

                <div className="pb-2">
                    {restKeys.map((row, index) => (
                        <div key={index} className="flex justify-center gap-2 w-full p-2">
                            {row.map((key, index) => {
                                const [top, bottom] = key.split('\n');
                                return (
                                    <div
                                        key={index}
                                        className={`${getKeyWidth(key)} ${arrowKey(key)} flex flex-col items-center justify-center text-white text-xs  bg-[#111] rounded-lg border border-neutral-700  hover:bg-[#1d1d1d] transition select-none shadow-lg shadow-gray-50 px-2 py-1`}>
                                        {bottom ? (
                                            <div className="flex flex-col items-center gap-1 ">
                                                <span className="text-[10px] leading-tight">{top}</span>
                                                <span className="text-sm leading-tight">{bottom}</span>
                                            </div>
                                        ) : (
                                            <span className="text-sm">{key}</span>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                    ))}
                </div >
            </div >
        </>
    )
}
export default Keyboard;
