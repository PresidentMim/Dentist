import React, { useState } from 'react';

const FAQs = () => {
    const [show, setShow] = useState(null);

    const toggleShow = (index) => {
        setShow(show === index ? null : index);
    };

    return (
        <>
            <div className="max-w-2xl mx-auto p-4">
                <h2 className="text-center text-3xl font-bold text-primary text-[#00296D]">Preguntas Frecuentes</h2>
                <div className="mt-4">
                    {[...Array(5)].map((_, index) => (
                        <div key={index} className="border border-border rounded-lg mb-2 ">
                            <button 
                                onClick={() => toggleShow(index)} 
                                className="w-full text-left p-4 flex justify-between items-center  shadow-md"
                            >
                                <span className='w-[100%]'>¿Que Obras sociales aceptan?</span>
                                <span className='text-[#00296D] '>{show === index ? '▲' : '▼'}</span>
                            </button>
                            <div className={`p-4 border-t border-border ${show === index ? 'block' : 'hidden'}`}>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames. Convallis
                                    ornare praesent mollis at habitasse morbi eu ridiculus, tristique proin venenatis dictum nisl volutpat interdum, eleifend velit erat mi penatibus nibh curabitur. Vestibulum augue condimentum
                                    luctus auctor nullam imperdiet magna, mattis scelerisque erat odio aliquam risus nam morbi, accumsan dapibus montes facilisis suspendisse rhoncus.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FAQs;
