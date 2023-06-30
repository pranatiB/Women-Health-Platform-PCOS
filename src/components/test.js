// import React, { useState } from "react";
 import "./test.css";

// const PCOSForm = () => {
//   const [age, setAge] = useState("");
//   const [weight, setWeight] = useState("");
//   const [height, setHeight] = useState("");
//   const [BMI, setBMI] = useState("");
//   const [BloodGroup, setBloodGroup] = useState("");
//   const [PulseRate, setPulseRate] = useState("");
//   const [RR, setRR] = useState("");
//   const [Hb, setHb] = useState("");
//   const [Cycle, setCycle] = useState("");
//   const [CycleLength, setCycleLength] = useState("");
//   const [MarraigeStatus, setMarraigeStatus] = useState("");
//   const [Pregnant, setPregnant] = useState("");
//   const [abortion, setAbortion] = useState("");
//   const [IBeta, setIBeta] = useState("");
//   const [IIBeta, setIIBeta] = useState("");
//   const [FSH, setFSH] = useState("");
//   const [LH, setLH] = useState("");
//   const [FSH_LH, setFSH_LSH] = useState("");
//   const [hip, setHip] = useState("");
//   const [waist, setWaist] = useState("");
//   const [hipRatio, setHipRatio] = useState("");
//   const [TSH, setTSH] = useState("");
//   const [AMG, setAMG] = useState("");
//   const [PRL, setPRL] = useState("");
//   const [VitD3, setVitD3] = useState("");
//   const [PRG, setPRG] = useState("");
//   const [weightGain, setWeightGain] = useState("");
//   const [hair, setHair] = useState("");
//   const [skinDark, setSkinDark] = useState("");
//   const [hairLoss, setHairLoss] = useState("");
//   const [fastfood, setFastFood] = useState("");
//   const [acne, setAcne] = useState("");
//   const [exercise, setExercise] = useState("");
//   const [BP_S, setBP_S] = useState("");
//   const [BP_D, setBP_D] = useState("");
//   const [follicle_L, setFollicle_L] = useState("");
//   const [follicle_R, setFollicle_R] = useState("");
//   const [fsize_L, setFsize_L] = useState("");
//   const [fsize_R, setFsize_R] = useState("");
//   const [endometrium, setEndometrium] = useState("");
//   const [result, setResult] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const { age, weight, height, periods, hair, acne, result } = 'userData'
//     // Perform calculations and prediction based on form inputs here
//     // Set the prediction result using setResult
//     fetch('https://pcos-predictor-default-rtdb.firebaseio.com/userDataRecords.json', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         age, weight, height, periods, hair, acne, result,
//       }),
//     }
//     );
//   };

// pranati's code --

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function PCOSform() {
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    const response = await axios
      .post("http://localhost:5000/predict", formData)
      .then((res) => {
        console.log(res);
        setResult(res.data[0]);
      })
      .catch((err) => {
        console.log("Error!! in handleSubmit");
      });
    // setResult(response.data.prediction_text);
  };
  

  return (
    <div className="pcos-form">
      {/* <h1>PCOS Prediction</h1>
      <form onSubmit={handleSubmit} method="POST">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <label htmlFor="BMI">BMI</label>
        <input
          type="number"
          id="BMI"
          value={BMI}
          onChange={(e) => setBMI(e.target.value)}
        />

        <label htmlFor="BloodGroup">Blood Group</label>
        <input
          type="number"
          id="BloodGroup"
          value={BloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
        />

        <label htmlFor="PulseRate">Pulse Rate (bpm) </label>
        <input
          type="number"
          id="PulseRate"
          value={PulseRate}
          onChange={(e) => setPulseRate(e.target.value)}
        />

        <label htmlFor="RR">RR (breaths/min)</label>
        <input
          type="number"
          id="RR"
          value={RR}
          onChange={(e) => setRR(e.target.value)}
        />

        <label htmlFor="Hb">HB (g/dl)</label>
        <input
          type="number"
          id="Hb"
          value={Hb}
          onChange={(e) => setHb(e.target.value)}
        />
        <label htmlFor="Cycle">Cycle (R/I)</label>
        <input
          type="number"
          id="Cycle"
          value={Cycle}
          onChange={(e) => setCycle(e.target.value)}
        />

        <label htmlFor="Marriage Status">Marraige Status (Yrs)</label>
        <input
          type="number"
          id="MarriageStatus"
          value={MarraigeStatus}
          onChange={(e) => setMarraigeStatus(e.target.value)}
        />

        <label htmlFor="Pregnant">Pregnant </label>
        <select id="Pregnant" value={hair} onChange={(e) => setPregnant(e.target.value)}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

         <label htmlFor="abortionRate">Number of Abortion</label>
        <input
          type="number"
          id="abortion"
          value={abortion}
          onChange={(e) => setAbortion(e.target.value)}
        />

         <label htmlFor="I beta-HCG">I beta-HCG (mlU/mL)</label>
        <input
          type="number"
          id="IBeta"
          value={IBeta}
          onChange={(e) => setIBeta(e.target.value)}
        />

        <label htmlFor="II beta-HCG">II beta-HCG (mlU/mL)</label>
        <input
          type="number"
          id="IIBeta"
          value={IIBeta}
          onChange={(e) => setIIBeta(e.target.value)}
        />

        <label htmlFor="FSH">FSH (mlU/mL)</label>
        <input
          type="number"
          id="FSH"
          value={FSH}
          onChange={(e) => setFSH(e.target.value)}
        />

        <label htmlFor="LH">LH (mlU/mL)</label>
        <input
          type="number"
          id="LH"
          value={LH}
          onChange={(e) => setLH(e.target.value)}
        />

        <label htmlFor="FSH/LSH">FSH/LSH</label>
        <input
          type="number"
          id="FSH_LSH"
          value={FSH_LH}
          onChange={(e) => setFSH_LSH(e.target.value)}
        />

        <label htmlFor="hip">Hip(inch)</label>
        <input
          type="number"
          id="hip"
          value={hip}
          onChange={(e) => setHip(e.target.value)}
        />

        <label htmlFor="waist">Waist(inch)</label>
        <input
          type="number"
          id="waist"
          value={waist}
          onChange={(e) => setWaist(e.target.value)}
        />

        <label htmlFor="HipRatio">Waist : Hip Ratio</label>
        <input
          type="number"
          id="HipRatio"
          value={hipRatio}
          onChange={(e) => setHipRatio(e.target.value)}
        />

        <label htmlFor="TSH">TSH (mlU/mL)</label>
        <input
          type="number"
          id="TSH"
          value={TSH}
          onChange={(e) => setTSH(e.target.value)}
        />

        <label htmlFor="AMG">AMG (ng/mL)</label>
        <input
          type="number"
          id="AMG"
          value={AMG}
          onChange={(e) => setAMG(e.target.value)}
        />

        <label htmlFor="PRL">PRL (ng/mL)</label>
        <input
          type="number"
          id="PRL"
          value={PRL}
          onChange={(e) => setPRL(e.target.value)}
        />

        <label htmlFor="vitD3">Vitamin D3 (ng/mL)</label>
        <input
          type="number"
          id="VitD3"
          value={VitD3}
          onChange={(e) => setVitD3(e.target.value)}
        />

        <label htmlFor="PRG">PRG (ng/mL)</label>
        <input
          type="number"
          id="PRG"
          value={PRG}
          onChange={(e) => setPRG(e.target.value)}
        />

        <label htmlFor="weightGain">Excessive weight gain:</label>
        <select id="weightGain" value={weightGain} onChange={(e) => setWeightGain(e.target.value)}>
          <option value="-">-</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label htmlFor="hair">Excessive hair growth:</label>
        <select id="hair" value={hairLoss} onChange={(e) => setHair(e.target.value)}>
          <option value="-">-</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label htmlFor="skinDark">Excessive skin darkening:</label>
        <select id="skinDark" value={skinDark} onChange={(e) => setSkinDark(e.target.value)}>
          <option value="-">-</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label htmlFor="hairLoss">Excessive hair loss:</label>
        <select id="hairLoss" value={hairLoss} onChange={(e) => setHairLoss(e.target.value)}>
          <option value="-"></option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label htmlFor="acne">Acne:</label>
        <select id="acne" value={acne} onChange={(e) => setAcne(e.target.value)}>
          <option value="none">None</option>
          <option value="mild">Mild</option>
          <option value="moderate">Moderate</option>
          <option value="severe">Severe</option>
        </select>

        <label htmlFor="fastfood">Fast Food Consumption :</label>
        <select id="fastfood" value={fastfood} onChange={(e) => setFastFood(e.target.value)}>
          <option value="-">-</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label htmlFor="exercise">Regular Exercise : </label>
        <select id="exercise" value={exercise} onChange={(e) => setExercise(e.target.value)}>
          <option value="-">-</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label htmlFor="BP_Systolic">BP Systolic (mmHg)</label>
        <input
          type="number"
          id="BP_Systolic"
          value={BP_S}
          onChange={(e) => setBP_S(e.target.value)}
        />

        <label htmlFor="BP_Diastolic">BP Diastolic (mmHg)</label>
        <input
          type="number"
          id="BP_Diatolic"
          value={BP_D}
          onChange={(e) => setBP_D(e.target.value)}
        />

        <label htmlFor="FolicleNo(L)">Follicle No (L)</label>
        <input
          type="number"
          id="FolicleNo(L)"
          value={follicle_L}
          onChange={(e) => setFollicle_L(e.target.value)}
        />

        <label htmlFor="FolicleNo(R)">Follicle No (R)</label>
        <input
          type="number"
          id="FolicleNo(R)"
          value={follicle_R}
          onChange={(e) => setFollicle_R(e.target.value)}
        />

        <label htmlFor="Avg F size(L)">Avg F Size (L)</label>
        <input
          type="number"
          id="Avg F size(L)"
          value={fsize_L}
          onChange={(e) => setFsize_L(e.target.value)}
        />

        <label htmlFor="Avg F size(R)">Avg F Size (R)</label>
        <input
          type="number"
          id="Avg F size(R)"
          value={fsize_R}
          onChange={(e) => setFsize_R(e.target.value)}
        />

        <label htmlFor="endometrium">Endometrium (mm):</label>
        <input
          type="number"
          id="endometrium"
          value={endometrium}
          onChange={(e) => setEndometrium(e.target.value)}
        />

        <button type="submit" >Predict</button>
      </form>

      {result && (
        <div className="pcos-result">
          <h3>Prediction Result:</h3>
          <p>{result}</p>
        </div>
      )} */}

      <Form autoComplete="true" onSubmit={handleSubmit}>
        <Form.Group controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            name="Age (yrs)"
            value={formData.Age}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="weight">
          <Form.Label>Weight (Kg)</Form.Label>
          <Form.Control
            type="number"
            name="Weight (Kg)"
            value={formData["Weight (Kg)"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="height">
          <Form.Label>Height (Cm)</Form.Label>
          <Form.Control
            type="number"
            name="Height(Cm)"
            value={formData["Height (Cm)"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="bmi">
          <Form.Label>BMI</Form.Label>
          <Form.Control
            type="number"
            name="BMI"
            value={formData["BMI"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="bloodGroup">
          <Form.Label>Blood Group</Form.Label>
          <Form.Control
            type="text"
            name="Blood Group"
            value={formData["Blood Group"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="pulseRate">
          <Form.Label>Pulse rate (bpm)</Form.Label>
          <Form.Control
            type="number"
            name="Pulse rate(bpm)"
            value={formData["Pulse rate (bpm)"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="rr">
          <Form.Label>RR (breaths/min)</Form.Label>
          <Form.Control
            type="number"
            name="RR (breaths/min)"
            value={formData["RR (breaths/min)"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="hb">
          <Form.Label>Hb (g/dl)</Form.Label>
          <Form.Control
            type="number"
            name="Hb(g/dl)"
            value={formData["Hb(g/dl)"]}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="cycle">
          <Form.Label>Cycle (R/I)</Form.Label>
          <input
            type="number"
            className="form-control"
            name="Cycle(R/I)"
            value={formData["Cycle(R/I)"]}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="cycleLength">
          <Form.Label>Cycle length (days)</Form.Label>
          <Form.Control
            type="number"
            name="Cycle length(days)"
            value={formData["Cycle length(days)"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="marriageStatus">
          <Form.Label>Marriage Status (Yrs)</Form.Label>
          <Form.Control
            type="number"
            name="Marraige Status (Yrs)"
            value={formData["Marraige Status (Yrs)"]}
            onChange={handleChange}
          />

          <Form.Group controlId="pregnant">
            <Form.Label>Pregnant (Y/N)</Form.Label>
            <Form.Control
              type="number"
              name="Pregnant(Y/N)"
              value={formData["Pregnant(Y/N)"]}
              onChange={handleChange}
              min="0"
              max="1"
            />
          </Form.Group>
          <Form.Group controlId="num-abortions">
            <Form.Label>No. of abortions</Form.Label>
            <Form.Control
              type="number"
              name="No. of aborptions"
              value={formData["No. of aborptions"]}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="ibhcg">
            <Form.Label>I beta-HCG (mIU/mL)</Form.Label>
            <Form.Control
              type="number"
              name="I beta-HCG(mIU/mL)"
              value={formData["I beta-HCG(mIU/mL)"]}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="iibhcg">
            <Form.Label>II beta-HCG (mIU/mL)</Form.Label>
            <Form.Control
              type="number"
              name="II beta-HCG(mIU/mL)"
              value={formData["II beta-HCG(mIU/mL)"]}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="fsh">
            <Form.Label>FSH (mIU/mL)</Form.Label>
            <Form.Control
              type="number"
              name="FSH(mIU/mL)"
              value={formData["FSH(mIU/mL)"]}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="lh">
            <Form.Label>LH (mIU/mL)</Form.Label>
            <Form.Control
              type="number"
              name="LH(mIU/mL)"
              value={formData["LH(mIU/mL)"]}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="fsh-lh">
            <Form.Label>FSH/LH</Form.Label>
            <Form.Control
              type="number"
              name="FSH/LH"
              value={formData["FSH/LH"]}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="hip">
            <Form.Label>Hip (inch)</Form.Label>
            <Form.Control
              type="number"
              name="Hip(inch)"
              value={formData["Hip(inch)"]}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="waist">
            <Form.Label>Waist (inch)</Form.Label>
            <Form.Control
              type="number"
              name="Waist(inch)"
              value={formData["Waist(inch)"]}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="waist-hip">
            <Form.Label>Waist:Hip Ratio</Form.Label>
            <Form.Control
              type="number"
              name="Waist:Hip Ratio"
              value={formData["Waist:Hip Ratio"]}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="tsh">
            <Form.Label>TSH (mIU/L)</Form.Label>
            <Form.Control
              type="number"
              name="TSH (mIU/L)"
              value={formData["TSH (mIU/L)"]}
              onChange={handleChange}
            />
          </Form.Group>
        </Form.Group>

        <Form.Group controlId="amh">
          <Form.Label>AMH(ng/mL)</Form.Label>
          <Form.Control
            type="text"
            name="AMH(ng/mL)"
            value={formData["AMH(ng/mL)"]}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="prl">
          <Form.Label>PRL(ng/mL)</Form.Label>
          <Form.Control
            type="text"
            name="PRL(ng/mL)"
            value={formData["PRL(ng/mL)"]}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="vitd3">
          <Form.Label>Vit D3 (ng/mL)</Form.Label>
          <Form.Control
            type="text"
            name="Vit D3 (ng/mL)"
            value={formData["Vit D3 (ng/mL)"]}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="prg">
          <Form.Label>PRG(ng/mL)</Form.Label>
          <Form.Control
            type="text"
            name="PRG(ng/mL)"
            value={formData["PRG(ng/mL)"]}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="weight-gain">
          <Form.Label>Weight gain(Y/N)</Form.Label>
          <Form.Control
            type="number"
            name="Weight gain(Y/N)"
            value={formData["Weight gain(Y/N)"]}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="hair-growth">
          <Form.Label>hair growth(Y/N)</Form.Label>
          <Form.Control
            type="number"
            name="hair growth(Y/N)"
            value={formData["hair growth(Y/N)"]}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="skin-darkening">
          <Form.Label>Skin darkening (Y/N)</Form.Label>
          <Form.Control
            type="number"
            name="Skin darkening (Y/N)"
            value={formData["Skin darkening (Y/N)"]}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="hair-loss">
          <Form.Label>Hair loss(Y/N)</Form.Label>
          <Form.Control
            type="number"
            name="Hair loss(Y/N)"
            value={formData["Hair loss(Y/N)"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="pimples">
          <Form.Label>Pimples(Y/N)</Form.Label>
          <Form.Control
            type="text"
            name="Pimples(Y/N)"
            value={formData["Pimples(Y/N)"]}
            onChange={handleChange}
            pattern="[0-9]*"
            inputMode="numeric"
          />
        </Form.Group>

        <Form.Group controlId="fastfood">
          <Form.Label>Fast food (Y/N)</Form.Label>
          <Form.Control
            type="text"
            name="Fast food (Y/N)"
            value={formData["Fast food (Y/N)"]}
            onChange={handleChange}
            pattern="[0-9]*"
            inputMode="numeric"
          />
        </Form.Group>

        <Form.Group controlId="exercise">
          <Form.Label>Reg.Exercise(Y/N)</Form.Label>
          <Form.Control
            type="text"
            name="Reg.Exercise(Y/N)"
            value={formData["Reg.Exercise(Y/N)"]}
            onChange={handleChange}
            pattern="[0-9]*"
            inputMode="numeric"
          />
        </Form.Group>

        <Form.Group controlId="bpSystolic">
          <Form.Label>BP _Systolic (mmHg)</Form.Label>
          <Form.Control
            type="number"
            name="BP _Systolic (mmHg)"
            value={formData["BP _Systolic (mmHg)"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="bpDiastolic">
          <Form.Label>BP _Diastolic (mmHg)</Form.Label>
          <Form.Control
            type="number"
            name="BP _Diastolic (mmHg)"
            value={formData["BP _Diastolic (mmHg)"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="follicleNoL">
          <Form.Label>Follicle No. (L)</Form.Label>
          <Form.Control
            type="number"
            name="Follicle No. (L)"
            value={formData["Follicle No. (L)"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="follicleNoR">
          <Form.Label>Follicle No. (R)</Form.Label>
          <Form.Control
            type="number"
            name="Follicle No. (R)"
            value={formData["Follicle No. (R)"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="avgFL">
          <Form.Label>Avg. F size (L) (mm)</Form.Label>
          <Form.Control
            type="number"
            name="Avg. F size (L) (mm)"
            value={formData["Avg. F size (L) (mm)"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="avgFR">
          <Form.Label>Avg. F size (R) (mm)</Form.Label>
          <Form.Control
            type="number"
            name="Avg. F size (R) (mm)"
            value={formData["Avg. F size (R) (mm)"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="endometrium">
          <Form.Label>Endometrium (mm)</Form.Label>
          <Form.Control
            type="number"
            name="Endometrium (mm)"
            value={formData["Endometrium (mm)"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Predict
        </Button>
      </Form>
      {result && (
        <p className="mt-3">
          The prediction result is: <strong>{Number(result)*100} %</strong>
        </p>
      )}
    </div>
  );
};

export default PCOSform;
