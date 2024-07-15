import React, { useState } from 'react';

const avatarImage = 'Photos/wm.jpg'
const BodySize = () => {
    const [bust, setBust] = useState('');
    const [waist, setWaist] = useState('');
    const [hips, setHips] = useState('');
    const [selectedInput, setSelectedInput] = useState(null);

    const handleInputFocus = (inputName) => {
        setSelectedInput(inputName);
    };

    return (
        <div className="form-section" style={{ display: 'flex', marginBottom: '0px',border:'1px solid lightgrey',padding:'3vh' }}>
           
            <div className="left-container" style={{ flex: 2, marginRight: '20px' ,justifyContent:'center'}}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Step 3: How to measure?</h2>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.4', marginBottom: '20px' }}>
                    You'll need a tape measure or a piece of string. Measure yourself while standing up for the best results.
                </p>

                <form>
                    <label htmlFor="bust" style={{ fontSize: '1.2rem', marginBottom: '10px', display: 'block' }}>
                        Bust (cm):
                        <span style={{ fontSize: '0.8rem', display: 'block', color: '#666' }}>Measure around the fullest part of your bust.</span>
                    </label>
                    <input
                        type="number"
                        id="bust"
                        value={bust}
                        onChange={(e) => setBust(e.target.value)}
                        onFocus={() => handleInputFocus('bust')}
                        style={{
                            width: '60%',
                            padding: '8px',
                            fontSize: '1rem',
                            marginBottom: '10px',
                            backgroundColor: 'white',
                            border: '1px solid #FF3E6C',
                            borderRadius: '4px',
                            transition: 'border-color 0.3s',
                        }}
                        required
                    />

                    <label htmlFor="waist" style={{ fontSize: '1.2rem', marginBottom: '10px', display: 'block' }}>
                        Waist (cm):
                        <span style={{ fontSize: '0.8rem', display: 'block', color: '#666' }}>Measure around the narrowest part of your waist.</span>
                    </label>
                    <input
                        type="number"
                        id="waist"
                        value={waist}
                        onChange={(e) => setWaist(e.target.value)}
                        onFocus={() => handleInputFocus('waist')}
                        style={{
                            width: '60%',
                            padding: '8px',
                            fontSize: '1rem',
                            marginBottom: '10px',
                            backgroundColor: 'white',
                            border: '1px solid #FF3E6C',
                            borderRadius: '4px',
                            transition: 'border-color 0.3s',
                        }}
                        required
                    />

                    <label htmlFor="hips" style={{ fontSize: '1.2rem', marginBottom: '10px', display: 'block' }}>
                        Hips (cm):
                        <span style={{ fontSize: '0.8rem', display: 'block', color: '#666' }}>Measure around the fullest part of your hips.</span>
                    </label>
                    <input
                        type="number"
                        id="hips"
                        value={hips}
                        onChange={(e) => setHips(e.target.value)}
                        onFocus={() => handleInputFocus('hips')}
                        style={{
                            width: '60%',
                            padding: '8px',
                            fontSize: '1rem',
                            marginBottom: '10px',
                            backgroundColor: 'white',
                            border: '1px solid #FF3E6C',
                            borderRadius: '4px',
                            transition: 'border-color 0.3s',
                        }}
                        required
                    />
                </form>
            </div>

            {/* Right Container */}
            <div className="right-container" style={{ flex: 1, borderRadius: '8px', position: 'relative' }}>
                <div className="circle" style={{
                    width: '30px', height: '30px', borderRadius: '50%', backgroundColor: selectedInput === 'bust' ? '#FF3E6C' : 'white',
                    position: 'absolute', top: '27%', left: '27%', transform: 'translate(-50%, -50%)', textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem'
                }}>
                    <span className="circle-line circle-line-left" style={{ left: '-15px' }}></span>
                    <span className="circle-line circle-line-right" style={{ right: '-15px' }}></span>
                    1
                </div>
                <div className="circle" style={{
                    width: '30px', height: '30px', borderRadius: '50%', backgroundColor: selectedInput === 'waist' ? '#FF3E6C' : 'white',
                    position: 'absolute', top: '35%', left: '27%', transform: 'translate(-50%, -50%)', textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem'
                }}>
                    <span className="circle-line circle-line-left" style={{ left: '-15px' }}></span>
                    <span className="circle-line circle-line-right" style={{ right: '-15px' }}></span>
                    2
                </div>
                <div className="circle" style={{
                    width: '30px', height: '30px', borderRadius: '50%', backgroundColor: selectedInput === 'hips' ? '#FF3E6C' : 'white',
                    position: 'absolute', top: '45%', left: '27%', transform: 'translate(-50%, -50%)', textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem'
                }}>
                    <span className="circle-line circle-line-left" style={{ left: '-15px' }}></span>
                    <span className="circle-line circle-line-right" style={{ right: '-15px' }}></span>
                    3
                </div>
                <img src={avatarImage} alt="Avatar" style={{ maxWidth: '100%', maxHeight: '70vh', borderRadius: '8px' }} />
            </div>

            <style>{`
                .circle-line {
                    position: absolute;
                    top: 50%;
                    width: 15px;
                    height: 2px;
                    background-color: #CCCCCC;
                    transform: translateY(-50%);
                }

                .circle-line-left {
                    left: -15px;
                }

                .circle-line-right {
                    right: -15px;
                }

                input:active{
                    border:1px solid black;
                }

                
            `}</style>
        </div>
    );
};

export default BodySize;
