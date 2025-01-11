'use client';
import { useState } from 'react';

export default function Home() {
    const [progress, setProgress] = useState<number>(0);
    const [numeroPasso, setNumeroPasso] = useState<number>(1);

    const handleClick = (calculo: number, text: string) => {
        setProgress(progress + calculo);
        if (text === 'avançar') {
            setNumeroPasso((prevPasso) => prevPasso + 1);
        } else if (text === 'voltar') {
            setNumeroPasso((prevPasso) => prevPasso - 1);
        }
    };

    return (
        <div className="flex flex-col h-screen justify-center items-center">
            {/* Barra de progresso */}
            <div
                className={
                    'flex justify-center gap-28 items-center w-fit h-[6px] ' +
                    `${
                        progress > 0
                            ? `bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:${progress}%_100%] bg-no-repeat `
                            : 'bg-gray-300'

                        
                    }
                    `
                }
            >
                {[1, 2, 3, 4].map((numero) => {
                    return (
                        <div
                            className={`rounded-full border-4 px-2 py-0 border-gray-300 bg-white 
                                    ${
                                        numeroPasso >= numero
                                            ? 'border-blue-500'
                                            : ''
                                    }
                                `}
                            key={numero}
                        >
                            {numero}
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center gap-4 mt-8">
                <button
                    className={`bg-blue-400 py-2 px-8 text-white rounded-md disabled:bg-gray-400 disabled:text-gray-700`}
                    disabled={progress < 1}
                    onClick={() => handleClick(-33, 'voltar')}
                >
                    Voltar
                </button>
                <button
                    className="bg-blue-400 py-2 px-8 text-white rounded-md disabled:bg-gray-400 disabled:text-gray-700"
                    onClick={() => handleClick(33, 'avançar')}
                    disabled={progress > 98.9}
                >
                    Avançar
                </button>
            </div>
        </div>
    );
}
