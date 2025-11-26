import React, { useState } from 'react';

const ColorPaletteComparison = () => {
  const [selectedPalette, setSelectedPalette] = useState('landing');
  const [hoveredColor, setHoveredColor] = useState(null);

  const landingPageColors = {
    name: "Landing Page Global CSS",
    colors: [
      { name: "Aether Black", var: "--aether-black", hex: "#0A0A0F", usage: "Primary background" },
      { name: "Aether Steel", var: "--aether-steel", hex: "#1A1A24", usage: "Secondary background" },
      { name: "Aether Steel Light", var: "--aether-steel-light", hex: "#252532", usage: "Elevated surfaces" },
      { name: "Aether Electric", var: "--aether-electric", hex: "#1E90FF", usage: "Primary accent/CTA" },
      { name: "Aether Electric Dim", var: "--aether-electric-dim", hex: "#1E90FF33", usage: "Subtle highlights" },
      { name: "Aether White", var: "--aether-white", hex: "#F5F7FA", usage: "Primary text" },
      { name: "Aether White Muted", var: "--aether-white-muted", hex: "#F5F7FA99", usage: "Secondary text" },
      { name: "Aether Amber", var: "--aether-amber", hex: "#FFC561", usage: "Warning/highlight" },
      { name: "Aether Amber Dim", var: "--aether-amber-dim", hex: "#FFC56133", usage: "Subtle amber" },
      { name: "Aether Success", var: "--aether-success", hex: "#22C55E", usage: "Success states" },
    ]
  };

  const brandColors = {
    name: "Brand/Logo Colors",
    colors: [
      { name: "Deep Space Purple", var: "Primary", hex: "#1a0b2e", usage: "Logo primary" },
      { name: "High Voltage Orange", var: "Accent", hex: "#ff6b35", usage: "Logo accent" },
      { name: "Aether White", var: "Text", hex: "#e6f1ff", usage: "Logo text" },
    ]
  };

  const industrialColors = {
    name: "Cinematic Industrial (RECOMMENDED)",
    colors: [
      { name: "Deep Void", var: "--bg-void", hex: "#0B0A10", usage: "Main page background" },
      { name: "Orbital Grey", var: "--bg-orbital", hex: "#15151E", usage: "Cards/Panels" },
      { name: "Steel Plate", var: "--bg-steel", hex: "#232330", usage: "Inputs/Elevated surfaces" },
      { name: "Border Dim", var: "--border-dim", hex: "#2A2A35", usage: "Subtle borders" },
      { name: "Border Bright", var: "--border-bright", hex: "#3F3F50", usage: "Active borders" },
      { name: "High Voltage", var: "--accent-voltage", hex: "#FF6B35", usage: "Primary CTA/Critical alerts" },
      { name: "Voltage Dim", var: "--accent-voltage-dim", hex: "#FF6B3526", usage: "Subtle voltage (15% opacity)" },
      { name: "Voltage Glow", var: "--accent-voltage-glow", hex: "#FF6B3566", usage: "Hovers/Active (40% opacity)" },
      { name: "Aether Beam", var: "--signal-beam", hex: "#7C3AED", usage: "Secondary accent/Thinking states" },
      { name: "Plasma White", var: "--text-plasma", hex: "#EBEBF5", usage: "Primary text/Headings" },
      { name: "Muted Signal", var: "--text-muted", hex: "#9A9AB0", usage: "Secondary text/Specs" },
      { name: "Text Dark", var: "--text-dark", hex: "#58586A", usage: "Placeholders/Disabled" },
      { name: "Status Active", var: "--status-active", hex: "#10B981", usage: "Systems online" },
      { name: "Status Critical", var: "--status-crit", hex: "#FF4444", usage: "System failure" },
    ]
  };

  const ColorCard = ({ color, isLarge = false }) => {
    const isHovered = hoveredColor === color.hex;
    
    return (
      <div
        onMouseEnter={() => setHoveredColor(color.hex)}
        onMouseLeave={() => setHoveredColor(null)}
        className={`relative transition-all duration-300 ${
          isLarge ? 'h-48' : 'h-32'
        } ${isHovered ? 'scale-105 shadow-2xl' : 'shadow-lg'}`}
        style={{
          backgroundColor: color.hex,
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '12px',
          cursor: 'pointer'
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 to-transparent rounded-xl">
          <div className="text-white font-semibold text-sm mb-1">{color.name}</div>
          <div className="text-white/70 text-xs font-mono mb-1">{color.hex}</div>
          {color.var && (
            <div className="text-white/50 text-xs font-mono mb-1">{color.var}</div>
          )}
          <div className="text-white/60 text-xs italic">{color.usage}</div>
        </div>
        
        {isHovered && (
          <div className="absolute -top-2 -right-2 bg-white text-black text-xs px-2 py-1 rounded shadow-lg font-mono">
            Click to copy
          </div>
        )}
      </div>
    );
  };

  const ComparisonView = () => {
    return (
      <div className="space-y-8">
        {/* Industrial Palette - FEATURED */}
        <div className="bg-gradient-to-br from-purple-950 to-gray-900 rounded-2xl p-8 border-2 border-orange-500/50 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="w-4 h-4 bg-orange-500 rounded-full animate-pulse"></span>
              Cinematic Industrial (RECOMMENDED)
            </h3>
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              FINAL
            </span>
          </div>
          <p className="text-gray-300 text-sm mb-6">Gemini 3 Pro - "Sovereign Infrastructure" Palette</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {industrialColors.colors.map((color, idx) => (
              <ColorCard key={idx} color={color} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Landing Page Colors */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 opacity-60">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              Landing Page Palette
            </h3>
            <p className="text-gray-400 text-sm mb-6">Original global.css - Generic SaaS</p>
            <div className="grid grid-cols-2 gap-4">
              {landingPageColors.colors.slice(0, 6).map((color, idx) => (
                <ColorCard key={idx} color={color} />
              ))}
            </div>
          </div>

          {/* Brand/Logo Colors */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 opacity-60">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              Brand Logo Palette
            </h3>
            <p className="text-gray-400 text-sm mb-6">Original BRAND.md - Starting point</p>
            <div className="grid grid-cols-1 gap-4">
              {brandColors.colors.map((color, idx) => (
                <ColorCard key={idx} color={color} isLarge={true} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const MockupPreview = () => {
    return (
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 mt-8">
        <h3 className="text-2xl font-bold text-white mb-6">Live Preview: Cinematic Industrial</h3>
        
        <div className="space-y-6">
          {/* Full Width Industrial Hero */}
          <div style={{ backgroundColor: '#0B0A10' }} className="rounded-xl p-8 border border-gray-800">
            <div className="max-w-4xl">
              {/* Navigation */}
              <div className="flex items-center justify-between mb-12">
                <div style={{ color: '#EBEBF5' }} className="text-2xl font-bold tracking-tight">
                  AETHERPRO
                </div>
                <div className="flex gap-6">
                  <span style={{ color: '#9A9AB0' }} className="text-sm font-medium cursor-pointer hover:text-white transition-colors">Platform</span>
                  <span style={{ color: '#9A9AB0' }} className="text-sm font-medium cursor-pointer hover:text-white transition-colors">Infrastructure</span>
                  <span style={{ color: '#9A9AB0' }} className="text-sm font-medium cursor-pointer hover:text-white transition-colors">Defense</span>
                </div>
              </div>

              {/* Hero Content */}
              <div className="mb-8">
                <div style={{ color: '#FF6B35' }} className="text-xs font-mono mb-4 tracking-wider">
                  SOVEREIGN AI INFRASTRUCTURE
                </div>
                <h1 style={{ color: '#EBEBF5' }} className="text-5xl font-bold mb-4 leading-tight">
                  Enterprise-Grade AI<br/>Built on Physical Infrastructure
                </h1>
                <p style={{ color: '#9A9AB0' }} className="text-lg mb-8 max-w-2xl">
                  CMMC 2.0 compliant sovereign AI for defense contractors. 
                  Self-hosted intelligence on dedicated hardware you control.
                </p>
                <div className="flex gap-4">
                  <button 
                    style={{ backgroundColor: '#FF6B35', color: '#0B0A10' }}
                    className="px-6 py-3 rounded-lg text-sm font-bold tracking-wide hover:shadow-lg transition-shadow"
                  >
                    REQUEST ACCESS
                  </button>
                  <button 
                    style={{ 
                      backgroundColor: 'transparent', 
                      color: '#EBEBF5',
                      border: '1px solid #3F3F50'
                    }}
                    className="px-6 py-3 rounded-lg text-sm font-bold tracking-wide hover:border-gray-400 transition-colors"
                  >
                    VIEW ARCHITECTURE
                  </button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div style={{ backgroundColor: '#15151E', border: '1px solid #2A2A35' }} className="rounded-lg p-4">
                  <div style={{ color: '#7C3AED' }} className="text-xs font-mono mb-2">● MODELS</div>
                  <div style={{ color: '#EBEBF5' }} className="text-2xl font-bold mb-1">359+</div>
                  <div style={{ color: '#58586A' }} className="text-xs">Self-hosted instances</div>
                </div>
                <div style={{ backgroundColor: '#15151E', border: '1px solid #2A2A35' }} className="rounded-lg p-4">
                  <div style={{ color: '#10B981' }} className="text-xs font-mono mb-2">● UPTIME</div>
                  <div style={{ color: '#EBEBF5' }} className="text-2xl font-bold mb-1">99.97%</div>
                  <div style={{ color: '#58586A' }} className="text-xs">L40S GPU cluster</div>
                </div>
                <div style={{ backgroundColor: '#15151E', border: '1px solid #2A2A35' }} className="rounded-lg p-4">
                  <div style={{ color: '#FF6B35' }} className="text-xs font-mono mb-2">● LATENCY</div>
                  <div style={{ color: '#EBEBF5' }} className="text-2xl font-bold mb-1">&lt;45ms</div>
                  <div style={{ color: '#58586A' }} className="text-xs">Avg. response time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div style={{ backgroundColor: '#15151E', border: '1px solid #2A2A35' }} className="rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div style={{ backgroundColor: '#FF6B3526', color: '#FF6B35' }} className="w-10 h-10 rounded flex items-center justify-center text-xl font-bold">
                  ⚡
                </div>
                <h3 style={{ color: '#EBEBF5' }} className="text-lg font-bold">Sovereign Deployment</h3>
              </div>
              <p style={{ color: '#9A9AB0' }} className="text-sm leading-relaxed">
                No API dependencies. Your models run on dedicated hardware in your geographic region. 
                Full compliance with CMMC 2.0 and ITAR requirements.
              </p>
            </div>

            <div style={{ backgroundColor: '#15151E', border: '1px solid #2A2A35' }} className="rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div style={{ backgroundColor: '#7C3AED26', color: '#7C3AED' }} className="w-10 h-10 rounded flex items-center justify-center text-xl font-bold">
                  🔒
                </div>
                <h3 style={{ color: '#EBEBF5' }} className="text-lg font-bold">Hardware-Level Security</h3>
              </div>
              <p style={{ color: '#9A9AB0' }} className="text-sm leading-relaxed">
                Built by a licensed master electrician. Physical infrastructure designed with 
                enterprise electrical standards from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ConflictAnalysis = () => {
    return (
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 mt-8">
        <h3 className="text-2xl font-bold text-white mb-6">⚡ Why "Cinematic Industrial" Wins</h3>
        
        <div className="space-y-4">
          <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-orange-500">
            <h4 className="text-orange-500 font-semibold mb-2">🔥 The Electrician's Moat</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• <strong>Orange = High Voltage Warning</strong> - International electrical safety color</li>
              <li>• <strong>Deep Void = Server Racks</strong> - Physical infrastructure reality</li>
              <li>• <strong>Matte Finishes = Industrial Grade</strong> - Not consumer software, not toys</li>
              <li>• <strong>Monospace Typography</strong> - Engineering precision, developer credibility</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-red-500">
            <h4 className="text-red-500 font-semibold mb-2">❌ Why Blue Failed</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• <span className="font-mono">#1E90FF</span> = Generic SaaS (Salesforce, Microsoft, WordPress)</li>
              <li>• Signals "software wrapper" not "sovereign infrastructure"</li>
              <li>• Zero differentiation in a sea of blue AI tools</li>
              <li>• Doesn't leverage your physical hardware background</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-purple-500">
            <h4 className="text-purple-500 font-semibold mb-2">🎯 Target Market Alignment</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• <strong>Defense Contractors:</strong> Need to see "industrial strength" not "startup vibes"</li>
              <li>• <strong>CMMC 2.0 Enterprises:</strong> Trust physical infrastructure operators over API resellers</li>
              <li>• <strong>Sovereign AI Buyers:</strong> Want vendor who understands hardware at electrical level</li>
              <li>• <strong>Visual Peers:</strong> Palantir, Anduril, Databricks - not Notion or Linear</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-green-500">
            <h4 className="text-green-500 font-semibold mb-2">✓ Implementation Rules</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• <strong>NO gradients on text</strong> - Keeps it professional, not web3/crypto</li>
              <li>• <strong>Matte card backgrounds</strong> - Flat panels with 1px borders only</li>
              <li>• <strong>Voltage used sparingly</strong> - Reserve orange for critical moments/CTAs</li>
              <li>• <strong>JetBrains Mono for specs</strong> - Reinforces engineering company identity</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: '#0f0f13', minHeight: '100vh' }} className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">AetherPro Color Palette Review</h1>
          <p className="text-gray-400">Compare and finalize colors before full landing page build</p>
        </div>

        <ComparisonView />
        <MockupPreview />
        <ConflictAnalysis />

        <div className="mt-8 bg-gradient-to-br from-orange-950/20 to-purple-950/20 rounded-2xl p-6 border-2 border-orange-500/30">
          <h3 className="text-xl font-bold text-white mb-4">🚀 Final Decision: Industrial Palette</h3>
          <p className="text-gray-300 mb-4">
            This is your strategic differentiator. The orange voltage against deep void positions you as 
            an infrastructure operator who understands hardware at the electrical level. Ready for Opus to build?
          </p>
          <div className="flex gap-4 flex-wrap">
            <button 
              onClick={() => {
                const css = `:root {
  /* BACKGROUNDS - The Industrial Void */
  --bg-void: #0B0A10;
  --bg-orbital: #15151E;
  --bg-steel: #232330;
  
  /* BORDERS - Mechanical Precision */
  --border-dim: #2A2A35;
  --border-bright: #3F3F50;

  /* ACCENTS - High Voltage */
  --accent-voltage: #FF6B35;
  --accent-voltage-dim: rgba(255, 107, 53, 0.15);
  --accent-voltage-glow: rgba(255, 107, 53, 0.4);

  /* INTELLIGENCE - The Aether */
  --signal-beam: #7C3AED;
  
  /* TEXT - Legibility First */
  --text-plasma: #EBEBF5;
  --text-muted: #9A9AB0;
  --text-dark: #58586A;
  
  /* STATUS */
  --status-active: #10B981;
  --status-crit: #FF4444;
}`;
                navigator.clipboard.writeText(css);
              }}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
            >
              📋 Copy CSS Variables
            </button>
            <button 
              onClick={() => {
                const brandDoc = `# AetherPro Brand Guidelines - Cinematic Industrial

## Strategic Position
**"Sovereign AI Infrastructure Built by a Master Electrician"**

AetherPro is not software - it's physical infrastructure for AI. We compete with Palantir, Anduril, and Databricks on industrial strength, not with Notion and Linear on consumer polish.

---

## Color Palette: "Cinematic Industrial"

### The Void (Backgrounds)
- **Deep Void**: #0B0A10 - Main page background
- **Orbital Grey**: #15151E - Card/panel backgrounds  
- **Steel Plate**: #232330 - Input fields/elevated surfaces

### The Power (Accents)
- **High Voltage**: #FF6B35 - Primary CTA, critical alerts, logo accent
  - International electrical warning color
  - YOUR unfair advantage as an electrician
  - Use SPARINGLY for maximum impact
- **Voltage Dim**: rgba(255, 107, 53, 0.15) - Subtle highlights
- **Voltage Glow**: rgba(255, 107, 53, 0.4) - Hover states

### The Signal (Intelligence)
- **Aether Beam**: #7C3AED - Secondary accent for "thinking" states, loading, active processes

### Text (Legibility First)
- **Plasma White**: #EBEBF5 - Primary text/headings
- **Muted Signal**: #9A9AB0 - Secondary text/technical specs
- **Text Dark**: #58586A - Placeholders/disabled states

### Borders (Mechanical Precision)
- **Border Dim**: #2A2A35 - Subtle dividers
- **Border Bright**: #3F3F50 - Active borders

### Status Indicators
- **Active**: #10B981 - Systems online
- **Critical**: #FF4444 - System failure

---

## Typography

### Headings
- **Font**: Inter (Bold)
- **Weight**: 700
- **Color**: Plasma White (#EBEBF5)
- **Style**: ALL CAPS for section labels, Title Case for H1/H2

### Body Text
- **Font**: Inter (Regular)  
- **Weight**: 400
- **Color**: Muted Signal (#9A9AB0)
- **Line Height**: 1.6 for readability

### Technical/Code
- **Font**: JetBrains Mono
- **Usage**: Numbers, technical specs, status indicators, small labels
- **Why**: Reinforces engineering company identity

---

## Visual Rules (How Not to Look Like a Joke)

### ❌ NEVER
- Gradients on text (looks cheap/web3)
- Heavy drop shadows (not industrial)
- Bright neon purple backgrounds (looks like gaming/crypto)
- Multiple accent colors competing (dilutes voltage impact)

### ✅ ALWAYS  
- Matte finishes on cards (flat panels, 1px borders max)
- High contrast text (never sacrifice legibility)
- Generous whitespace (premium feel)
- Monospace for all technical data

---

## Logo Usage
- **Minimum size**: 32px height
- **Clear space**: 1x logo height on all sides  
- **Colors**: Purple structure + Orange voltage accents
- **Don't**: Rotate, stretch, recolor outside palette

---

## Brand Voice & Tone

### Professional But Direct
- No Silicon Valley hype-speak ("revolutionary", "game-changing")
- No consumer marketing fluff
- Technical precision > marketing buzzwords

### American Industrial Strength  
- "Built" not "designed"
- "Infrastructure" not "platform"  
- "Sovereign" not "private cloud"
- Lockheed Martin confidence, not startup hustle

### What We Are
- Master electrician building data centers
- Physical infrastructure for AI
- CMMC 2.0 compliance expert
- Sovereign deployment specialist

### What We're Not
- API wrapper startup
- Generic SaaS tool
- Consumer AI chatbot
- Venture-funded hype machine

---

## Competitive Visual Positioning

**We look like:**  
Palantir • Anduril • Databricks • Linear (engineering focus)

**We do NOT look like:**  
Notion • Figma • Webflow • Crypto projects

**Our aesthetic:**  
Data center control room • Terminal interface • Industrial cockpit

---

## File Format Standards
- **Logo**: SVG (primary) + PNG fallback (1024x1024)
- **Web Images**: WebP with PNG fallback
- **Icons**: SVG only
- **Photography**: Minimal - prefer technical diagrams

---

## Implementation Checklist
- [ ] All backgrounds use Void palette (#0B0A10, #15151E, #232330)
- [ ] Orange voltage (#FF6B35) used ONLY for CTAs and critical elements
- [ ] All body text is #9A9AB0 minimum
- [ ] Technical specs use JetBrains Mono
- [ ] No gradients on text anywhere
- [ ] Matte card finishes with 1px borders max
- [ ] High contrast maintained throughout (WCAG AA minimum)

---

**Last Updated**: November 2024  
**Contact**: Cory @ AetherPro Technologies LLC`;
                navigator.clipboard.writeText(brandDoc);
              }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
            >
              📄 Copy Brand.md
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPaletteComparison;