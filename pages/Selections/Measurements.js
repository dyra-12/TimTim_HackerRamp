import React, { useState } from 'react';

const FormSection = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  return (
    <div className="form-section" style={{ display: 'flex', padding:'10vh 10vh',marginBottom: '20px' , border:'1px solid lightgrey'}}>
      
      <div className="left-container" style={{ flex: 1, marginRight: '20px'}}>
      <img src="/Materials/undraw_personal_information_re_vw8a.svg" alt="" style={{height:'29vh'}}/>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Step 2: Personal Information</h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.4' }}>Please share details to accurately generate your body shape</p>
        
      </div>

      
      <div className="right-container" style={{ flex: 2 }}>
        <form>
          <label htmlFor="age" style={{ fontSize: '1.2rem', marginBottom: '10px', display: 'block' }}>Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              fontSize: '1rem',
              marginBottom: '10px',
              backgroundColor: '#ffffff',
              border: '1px solid rgb(255, 62, 108)',
              borderRadius: '4px',
              transition: 'border-color 0.3s',
            }}
            required
          />

          <div style={{ marginBottom: '10px' }}>
            <legend style={{ fontSize: '1.2rem', marginBottom: '10px', display: 'block' }}>Gender:</legend>
            <label style={radioStyle(gender === 'female')}>
              <input
                type="radio"
                value="female"
                checked={gender === 'female'}
                onChange={() => setGender('female')}
              />
              Female
            </label>
            <label style={radioStyle(gender === 'male')}>
              <input
                type="radio"
                value="male"
                checked={gender === 'male'}
                onChange={() => setGender('male')}
              />
              Male
            </label>
            <label style={radioStyle(gender === 'other')}>
              <input
                type="radio"
                value="other"
                checked={gender === 'other'}
                onChange={() => setGender('other')}
              />
              Other
            </label>
          </div>

          <label htmlFor="height" style={{ fontSize: '1.2rem', marginBottom: '10px', display: 'block' }}>Height (cm):</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              fontSize: '1rem',
              marginBottom: '10px',
              backgroundColor: '#ffffff',
              border: '1px solid rgb(255, 62, 108)',
              borderRadius: '4px',
              transition: 'border-color 0.3s',
            }}
            required
          />

          <label htmlFor="weight" style={{ fontSize: '1.2rem', marginBottom: '10px', display: 'block' }}>Weight (kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              fontSize: '1rem',
              marginBottom: '10px',
              backgroundColor: '#ffffff',
              border: '1px solid rgb(255, 62, 108)',
              borderRadius: '4px',
              transition: 'border-color 0.3s',
            }}
            required
          />
        </form>

        <style>{`
          input:focus {
            border-color: rgb(255, 62, 108) 1px solid;
          }

          input[type="radio"]:checked + label {
            background-color: rgb(255, 62, 108);
            color: white;
          }
        `}</style>
      </div>
    </div>
  );
};

const radioStyle = (isActive) => ({
  display: 'inline-block',
  marginBottom: '5px',
  marginRight: '10px',
  padding: '8px 15px',
  backgroundColor: isActive ? 'rgb(255, 62, 108)' : '#FFFFFF',
  color: isActive ? 'white' : 'rgb(255, 62, 108)',
  border: '1px solid #CCCCCC',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s, color 0.3s, border-color 0.3s'
});

export default FormSection;
