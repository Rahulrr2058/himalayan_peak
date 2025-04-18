import React from 'react';


export default function CommonHeader({title ,description}: {title: string; description: any}) {
    // JSON data for h1 and p content


    return (
        <header className="bg-secondary text-white py-8 text-center">
            <div className="max-w-6xl mx-auto py-14 px-4">
                <h1 className="text-5xl font-bold mb-2 tracking-wide">{title}</h1>
                <p className="text-xl opacity-2 ">
                    {description.map((line:any, index:any) => (
                        <React.Fragment key={index}>
                            {line}
                            {index < description.length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </p>
            </div>
        </header>
    );
}