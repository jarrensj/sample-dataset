export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center">Sample Dataset</h1>
        <p className="text-center text-gray-600 mb-8">Generate a sample dataset</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div>
            <label className="block text-sm font-medium mb-2">Input data:</label>
            <textarea
              placeholder="Paste your data here..."
              className="w-full h-80 p-4 border rounded-md font-mono text-sm"
            />
            
            <div className="mt-4">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Generate
              </button>
            </div>
          </div>

          {/* Output Section */}
          <div>
            <label className="block text-sm font-medium mb-2">Generated Sample Data:</label>
            <pre className="w-full h-80 p-4 border rounded-md bg-gray-50 font-mono text-sm overflow-auto">
              Generated sample data will appear here...
            </pre>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 rounded-md p-4">
          <h3 className="font-semibold mb-2">Instructions:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Paste your data in the input field</li>
            <li>Click &quot;Generate&quot; to create sample data with the same structure / schema</li>
          </ul>
        </div>
      </main>
    </div>
  );
}