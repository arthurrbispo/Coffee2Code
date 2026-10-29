import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, Terminal, Wifi, Power } from 'lucide-react';
import styles from './InteractiveMug.module.css';

export function InteractiveMug({ mugTemp, setMugTemp, mugStatus, setMugStatus, coffeeLevel, setCoffeeLevel }) {
  const [power, setPower] = useState(true);
  const [selectedPreset, setSelectedPreset] = useState('DEBUG');
  const [customMsg, setCustomMsg] = useState('DEPLOYING TO PROD');

  const presets = [
    { label: 'DEBUG_MODE', text: 'DEBUG: 0 ERRORS', temp: 68 },
    { label: 'SPRINT_REVIEW', text: 'CAFE: 100% READY', temp: 65 },
    { label: 'NIGHT_SHIFT', text: 'OVERTIME ACTIVATED', temp: 72 },
    { label: 'LOW_COFFEE', text: 'WARNING: 10% REMAINING', temp: 55 },
  ];

  const applyPreset = (preset) => {
    setSelectedPreset(preset.label);
    setCustomMsg(preset.text);
    setMugTemp(preset.temp);
    if (preset.temp > 70) {
      setMugStatus('BOOST');
    } else if (preset.temp < 60) {
      setMugStatus('ECO');
    } else {
      setMugStatus('NOMINAL');
    }
  };

  return (
    <section id="tecnologia" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>// PLAYGROUND INTERATIVO</span>
          <h2 className={styles.title}>Simulador de Telemetria e Dashboard</h2>
          <p className={styles.subtitle}>
            Ajuste a temperatura, simule notificações no display OLED e configure webhooks em tempo real.
          </p>
        </div>

        <div className={styles.playgroundGrid}>
          {/* Controls Console Panel */}
          <div className={styles.consolePanel}>
            <div className={styles.panelHeader}>
              <div className={styles.panelTitle}>
                <Sliders size={18} color="#FF5500" aria-hidden="true" />
                <span>Console de Controle do Hardware</span>
              </div>
              <button
                className={`${styles.powerToggle} ${power ? styles.powerOn : ''}`}
                onClick={() => setPower(!power)}
                aria-pressed={power}
              >
                <Power size={14} aria-hidden="true" />
                {power ? 'LIGADO' : 'DESLIGADO'}
              </button>
            </div>

            <div className={styles.controlsBody}>
              {/* Temperature Slider */}
              <div className={styles.controlGroup}>
                <div className={styles.labelRow}>
                  <label htmlFor="mug-temp">Regulagem de Temperatura (°C)</label>
                  <span className={styles.valueDisplay}>{mugTemp}°C</span>
                </div>
                <input
                  id="mug-temp"
                  type="range"
                  min="40"
                  max="85"
                  value={mugTemp}
                  disabled={!power}
                  aria-valuetext={`${mugTemp} graus Celsius`}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setMugTemp(val);
                    if (val > 70) setMugStatus('BOOST');
                    else if (val < 58) setMugStatus('ECO');
                    else setMugStatus('NOMINAL');
                  }}
                  className={styles.rangeInput}
                />
                <div className={styles.sliderMarkers}>
                  <span>40°C Morno</span>
                  <span>65°C Ideal</span>
                  <span>85°C Quente</span>
                </div>
              </div>

              {/* Coffee Level Slider */}
              <div className={styles.controlGroup}>
                <div className={styles.labelRow}>
                  <label htmlFor="mug-level">Nível Fictício de Café (%)</label>
                  <span className={styles.valueDisplay}>{coffeeLevel}%</span>
                </div>
                <input
                  id="mug-level"
                  type="range"
                  min="5"
                  max="100"
                  value={coffeeLevel}
                  disabled={!power}
                  aria-valuetext={`${coffeeLevel} por cento`}
                  onChange={(e) => setCoffeeLevel(Number(e.target.value))}
                  className={styles.rangeInput}
                />
              </div>

              {/* Display Preset Buttons */}
              <div className={styles.controlGroup}>
                <span className={styles.groupLabel} id="presets-label">Presets de Mensagem para Display OLED</span>
                <div className={styles.presetGrid} role="group" aria-labelledby="presets-label">
                  {presets.map((p) => (
                    <button
                      key={p.label}
                      disabled={!power}
                      aria-pressed={selectedPreset === p.label}
                      className={`${styles.presetBtn} ${selectedPreset === p.label ? styles.selectedPreset : ''}`}
                      onClick={() => applyPreset(p)}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Input */}
              <div className={styles.controlGroup}>
                <label htmlFor="mug-custom-text">Texto Customizado no Display</label>
                <div className={styles.inputWrapper}>
                  <input
                    id="mug-custom-text"
                    type="text"
                    maxLength={28}
                    value={customMsg}
                    disabled={!power}
                    onChange={(e) => {
                      setCustomMsg(e.target.value);
                      setSelectedPreset('CUSTOM');
                    }}
                    placeholder="Digite seu alerta de dev..."
                    className={styles.textInput}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Screen & Terminal Output */}
          <div className={styles.displayPanel}>
            <p className="sr-only" aria-live="polite">
              {power
                ? `Caneca ligada. Temperatura: ${mugTemp} graus Celsius. Status: ${mugStatus}. Nível de café: ${coffeeLevel} por cento. Mensagem no display: ${customMsg || 'SISTEMA OPERACIONAL'}.`
                : 'Caneca desligada. Sistema desligado.'}
            </p>
            <div className={styles.displayCard}>
              <div className={styles.displayCardHeader}>
                <span className={styles.screenTitle}>PAINEL OLED DUAL-COLOR</span>
                <div className={styles.statusIcons}>
                  <Wifi size={14} color="#00FF66" aria-hidden="true" />
                  <span className={styles.batteryPill}>{coffeeLevel}% Bateria</span>
                </div>
              </div>

              {/* Simulated OLED Display */}
              <div className={`${styles.oledScreen} ${!power ? styles.oledOff : ''}`}>
                {power ? (
                  <>
                    <div className={styles.screenRowTop}>
                      <span>[ Coffee2Code v2.4 ]</span>
                      <span className={styles.screenStatusText}>STATUS: {mugStatus}</span>
                    </div>

                    <div className={styles.screenMainContent}>
                      <div className={styles.screenTempNum}>{mugTemp}°C</div>
                      <div className={styles.screenMsgBox}>
                        &gt; {customMsg || 'SISTEMA OPERACIONAL'}
                      </div>
                    </div>

                    <div className={styles.screenProgressTrack}>
                      <div
                        className={styles.screenProgressBar}
                        style={{ width: `${coffeeLevel}%` }}
                      />
                    </div>

                    <div className={styles.screenRowBottom}>
                      <span>NÍVEL: {coffeeLevel}%</span>
                      <span>USB-C: 65W PD</span>
                    </div>
                  </>
                ) : (
                  <div className={styles.screenOffText}>[ SISTEMA DESLIGADO ]</div>
                )}
              </div>

              {/* Real-time JSON Webhook simulator code */}
              <div className={styles.terminalBox}>
                <div className={styles.terminalTopBar}>
                  <Terminal size={14} color="#94A3B8" aria-hidden="true" />
                  <span>telemetry_stream.json</span>
                </div>
                <pre className={styles.jsonOutput}>
{`{
  "device_id": "c2c_mug_8892",
  "power": ${power},
  "target_temp_celsius": ${mugTemp},
  "current_status": "${power ? mugStatus : 'OFF'}",
  "liquid_level_pct": ${coffeeLevel},
  "oled_display_text": "${customMsg}",
  "vscode_extension_sync": true
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
