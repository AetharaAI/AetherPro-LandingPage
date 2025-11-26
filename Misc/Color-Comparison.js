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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Landing Page Colors */}
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            Landing Page Palette
          </h3>
          <p className="text-gray-400 text-sm mb-6">Current global.css variables</p>
          <div className="grid grid-cols-2 gap-4">
            {landingPageColors.colors.map((color, idx) => (
              <ColorCard key={idx} color={color} />
            ))}
          </div>
        </div>

        {/* Brand/Logo Colors */}
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
            Brand Logo Palette
          </h3>
          <p className="text-gray-400 text-sm mb-6">BRAND.md specification</p>
          <div className="grid grid-cols-1 gap-4">
            {brandColors.colors.map((color, idx) => (
              <ColorCard key={idx} color={color} isLarge={true} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const MockupPreview = () => {
    return (
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 mt-8">
        <h3 className="text-2xl font-bold text-white mb-6">Live Preview Comparison</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Landing Page Style */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Landing Page Colors</h4>
            <div style={{ backgroundColor: '#0A0A0F' }} className="rounded-xl p-6 border border-gray-800">
              <div style={{ backgroundColor: '#1A1A24' }} className="rounded-lg p-4 mb-4">
                <h5 style={{ color: '#F5F7FA' }} className="text-xl font-bold mb-2">AetherPro Technologies</h5>
                <p style={{ color: '#F5F7FA99' }} className="text-sm mb-4">
                  Enterprise-grade AI infrastructure for defense contractors
                </p>
                <div className="flex gap-3">
                  <button 
                    style={{ backgroundColor: '#1E90FF', color: '#F5F7FA' }}
                    className="px-4 py-2 rounded-lg text-sm font-semibold"
                  >
                    Get Started
                  </button>
                  <button 
                    style={{ backgroundColor: '#FFC561', color: '#0A0A0F' }}
                    className="px-4 py-2 rounded-lg text-sm font-semibold"
                  >
                    Learn More
                  </button>
                </div>
              </div>
              <div className="flex gap-2">
                <div style={{ backgroundColor: '#252532' }} className="flex-1 rounded p-3">
                  <div style={{ color: '#22C55E' }} className="text-xs font-mono mb-1">● ACTIVE</div>
                  <div style={{ color: '#F5F7FA' }} className="text-sm font-semibold">Status</div>
                </div>
                <div style={{ backgroundColor: '#252532' }} className="flex-1 rounded p-3">
                  <div style={{ color: '#FFC561' }} className="text-xs font-mono mb-1">● WARN</div>
                  <div style={{ color: '#F5F7FA' }} className="text-sm font-semibold">Alert</div>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Logo Style */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Brand Logo Colors</h4>
            <div style={{ backgroundColor: '#1a0b2e' }} className="rounded-xl p-6 border border-purple-900/50">
              <div style={{ backgroundColor: '#1a0b2e' }} className="rounded-lg p-4 mb-4 border border-purple-800/30">
                <h5 style={{ color: '#e6f1ff' }} className="text-xl font-bold mb-2">AetherPro Technologies</h5>
                <p style={{ color: '#e6f1ff', opacity: 0.7 }} className="text-sm mb-4">
                  Enterprise-grade AI infrastructure for defense contractors
                </p>
                <div className="flex gap-3">
                  <button 
                    style={{ backgroundColor: '#ff6b35', color: '#e6f1ff' }}
                    className="px-4 py-2 rounded-lg text-sm font-semibold"
                  >
                    Get Started
                  </button>
                  <button 
                    style={{ backgroundColor: '#e6f1ff', color: '#1a0b2e' }}
                    className="px-4 py-2 rounded-lg text-sm font-semibold"
                  >
                    Learn More
                  </button>
                </div>
              </div>
              <div className="flex gap-2">
                <div style={{ backgroundColor: '#2a1b3e', border: '1px solid #ff6b3533' }} className="flex-1 rounded p-3">
                  <div style={{ color: '#ff6b35' }} className="text-xs font-mono mb-1">● ACTIVE</div>
                  <div style={{ color: '#e6f1ff' }} className="text-sm font-semibold">Status</div>
                </div>
                <div style={{ backgroundColor: '#2a1b3e', border: '1px solid #ff6b3533' }} className="flex-1 rounded p-3">
                  <div style={{ color: '#ff6b35' }} className="text-xs font-mono mb-1">● WARN</div>
                  <div style={{ color: '#e6f1ff' }} className="text-sm font-semibold">Alert</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ConflictAnalysis = () => {
    return (
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 mt-8">
        <h3 className="text-2xl font-bold text-white mb-6">⚡ Color Palette Analysis</h3>
        
        <div className="space-y-4">
          <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-yellow-500">
            <h4 className="text-yellow-500 font-semibold mb-2">⚠️ Key Differences</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• <span className="font-mono">#1E90FF</span> (Electric Blue) vs <span className="font-mono">#ff6b35</span> (Orange) - Different accent strategies</li>
              <li>• <span className="font-mono">#0A0A0F</span> (Aether Black) vs <span className="font-mono">#1a0b2e</span> (Purple) - Background warmth differs</li>
              <li>• Landing page has more granular color options (10 vs 3)</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-green-500">
            <h4 className="text-green-500 font-semibold mb-2">✓ Recommendations</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• <strong>Option 1:</strong> Keep landing page palette, add orange accent as <span className="font-mono">--aether-voltage: #ff6b35</span></li>
              <li>• <strong>Option 2:</strong> Shift landing page backgrounds toward purple undertones to match brand</li>
              <li>• <strong>Option 3:</strong> Use brand colors for hero section, landing colors for rest of site</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-blue-500">
            <h4 className="text-blue-500 font-semibold mb-2">🎯 Strategic Considerations</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Blue (#1E90FF) reads as "tech/reliable" - good for enterprise/defense</li>
              <li>• Orange (#ff6b35) reads as "energy/innovation" - matches your voltage theme</li>
              <li>• Pure blacks (#0A0A0F) vs purple blacks (#1a0b2e) affect perceived premium quality</li>
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

        <div className="mt-8 bg-gray-900 rounded-2xl p-6 border border-gray-800">
          <h3 className="text-xl font-bold text-white mb-4">🚀 Ready to Decide?</h3>
          <p className="text-gray-300 mb-4">
            Review the palettes above, then let me know which direction you want to take. 
            I can generate the final unified color scheme for your build prompt.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => navigator.clipboard.writeText(JSON.stringify(landingPageColors.colors, null, 2))}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Copy Landing CSS
            </button>
            <button 
              onClick={() => navigator.clipboard.writeText(JSON.stringify(brandColors.colors, null, 2))}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Copy Brand Colors
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPaletteComparison;