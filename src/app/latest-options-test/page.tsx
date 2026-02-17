import { LatestSection as OptionA } from '@/components/landing2/test-options/LatestSection-OptionA-TextOnly';
import { LatestSection as OptionB } from '@/components/landing2/test-options/LatestSection-OptionB-ImageTitleOnly';
import { LatestSection as OptionC } from '@/components/landing2/test-options/LatestSection-OptionC-Compact';
import { LatestSection as OptionD } from '@/components/landing2/test-options/LatestSection-OptionD-ImprovedCurrent';

export default function LatestOptionsTest() {
  return (
    <div className="bg-white">
      <div className="max-w-[1600px] mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          "The Latest" Section - Layout Options Comparison
        </h1>
        
        <div className="mb-12 p-6 bg-gray-100 rounded">
          <h2 className="text-2xl font-semibold mb-4">Test Criteria:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Readability:</strong> Can you read all titles without truncation?</li>
            <li><strong>Scannability:</strong> Can you quickly understand each article?</li>
            <li><strong>Conversion Potential:</strong> Would you click to read?</li>
            <li><strong>Visual Appeal:</strong> Does it look professional?</li>
            <li><strong>Brand Fit:</strong> Does it match Vista's sophisticated B2B positioning?</li>
          </ul>
        </div>

        {/* OPTION A */}
        <div className="mb-16 border-4 border-blue-500">
          <div className="bg-blue-500 text-white p-4">
            <h2 className="text-3xl font-bold">OPTION A: TEXT-ONLY SMALL CARDS</h2>
            <p className="mt-2">
              <strong>Based on:</strong> NYT, a16z pattern for B2B thought leadership<br/>
              <strong>Pros:</strong> Maximum readability, authority positioning, no truncation<br/>
              <strong>Cons:</strong> Less visual interest, may feel plain<br/>
              <strong>Best for:</strong> Premium content, serious B2B audiences
            </p>
          </div>
          <OptionA />
        </div>

        {/* OPTION B */}
        <div className="mb-16 border-4 border-green-500">
          <div className="bg-green-500 text-white p-4">
            <h2 className="text-3xl font-bold">OPTION B: IMAGE + TITLE ONLY</h2>
            <p className="mt-2">
              <strong>Based on:</strong> The Verge pattern for visual engagement<br/>
              <strong>Pros:</strong> Visual interest, clean scanning, no description truncation<br/>
              <strong>Cons:</strong> Less context about article content<br/>
              <strong>Best for:</strong> Visual content, tech/lifestyle audiences
            </p>
          </div>
          <OptionB />
        </div>

        {/* OPTION C */}
        <div className="mb-16 border-4 border-orange-500">
          <div className="bg-orange-500 text-white p-4">
            <h2 className="text-3xl font-bold">OPTION C: COMPACT (IMAGE + TITLE + SNIPPET)</h2>
            <p className="mt-2">
              <strong>Based on:</strong> TechCrunch pattern for information density<br/>
              <strong>Pros:</strong> Maximum information, visual + context<br/>
              <strong>Cons:</strong> Tight spacing, smaller text, may feel cramped<br/>
              <strong>Best for:</strong> Breaking news, high-volume content sites
            </p>
          </div>
          <OptionC />
        </div>

        {/* OPTION D */}
        <div className="mb-16 border-4 border-purple-500">
          <div className="bg-purple-500 text-white p-4">
            <h2 className="text-3xl font-bold">OPTION D: IMPROVED CURRENT LAYOUT</h2>
            <p className="mt-2">
              <strong>Based on:</strong> Vista's current design, improved<br/>
              <strong>Pros:</strong> Keeps visual interest, better proportions, prevents most truncation<br/>
              <strong>Cons:</strong> May still truncate very long titles/descriptions<br/>
              <strong>Best for:</strong> Balanced approach, maintains brand consistency
            </p>
          </div>
          <OptionD />
        </div>

        {/* Summary */}
        <div className="mt-12 p-8 bg-gray-900 text-white rounded">
          <h2 className="text-3xl font-bold mb-4">Quick Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-bold text-xl mb-2">Option A</h3>
              <p className="text-sm">Text-Only</p>
              <p className="text-green-400 mt-2">✓ Best readability</p>
              <p className="text-green-400">✓ No truncation</p>
              <p className="text-red-400">✗ Less visual</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Option B</h3>
              <p className="text-sm">Image + Title</p>
              <p className="text-green-400 mt-2">✓ Visual appeal</p>
              <p className="text-green-400">✓ Clean layout</p>
              <p className="text-yellow-400">~ Less context</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Option C</h3>
              <p className="text-sm">Compact (All 3)</p>
              <p className="text-green-400 mt-2">✓ Max info</p>
              <p className="text-red-400">✗ Cramped feel</p>
              <p className="text-red-400">✗ Small text</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Option D</h3>
              <p className="text-sm">Improved Current</p>
              <p className="text-green-400 mt-2">✓ Balanced</p>
              <p className="text-green-400">✓ Visual + context</p>
              <p className="text-yellow-400">~ May truncate edge cases</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
