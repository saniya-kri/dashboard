export default function Dashboard() {
  return (
    <div className="p-6">
      {/* First section: Update from Leasing Agent Two tabs [Updates from Leasing Agent | Previous Updates] */}
      <section className="bg-white rounded-lg shadow mb-6 p-4">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">
            Update from Leasing Agent 10/17/24
          </h2>
          <button className="text-blue-600">Previous Updates</button>
        </div>
        {/* Add content for the update section */}
        {/* After two tabs it will have Box which will show three tabs Leasing Agent | Property Manager | Director*/}
      </section>

      {/* Second section: Recommended Action  This will also have two tabs Recommended Action and Previous Updates*/}
      <section className="bg-white rounded-lg shadow mb-6 p-4">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">Recommended Action</h2>
          <button className="text-blue-600">Previous Actions</button>
        </div>
        {/* Add content for the recommended action section */}
      </section>

      {/* Third section: Stats */}
      <section className="bg-white rounded-lg shadow mb-6 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Stats</h2>
          <div className="text-sm">
            <span className="font-semibold">Future Showings Scheduled:</span> XX
            <span className="ml-4 font-semibold">Days on Market:</span> 195
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-500">0</div>
            <div className="text-sm">Leads: Last 7 Days</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-500">0</div>
            <div className="text-sm">Showings: Last 7 Days</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-500">1</div>
            <div className="text-sm">Applications: Last 7 Days</div>
          </div>
        </div>
        <div className="mt-4 text-sm">
          <div className="flex justify-between">
            <span>Last 7 Days</span>
            <span>Total</span>
          </div>
          <div className="flex justify-between">
            <span>0</span>
            <span>2657</span>
          </div>
          <div className="flex justify-between">
            <span>0</span>
            <span>3</span>
          </div>
        </div>
      </section>

      {/* Fourth section: Applications */}
      <section className="bg-white rounded-lg shadow mb-6 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Applications</h2>
          <button className="bg-blue-600 text-white px-3 py-1 rounded">
            Owner Approval Required
          </button>
        </div>
        {/* Add application status bars and legend here */}
      </section>

      {/* Fifth section: Property Listings */}
      <section className="bg-white rounded-lg shadow mb-6 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Property Listings</h2>
          <button className="bg-blue-600 text-white px-3 py-1 rounded">
            Submit a Listing Change
          </button>
        </div>
        {/* Add property listing details here */}
      </section>

      {/* Sixth section: Price History, CMA's, and Concessions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <section className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Price History</h2>
            <button className="bg-blue-600 text-white px-3 py-1 rounded">
              Submit a Price Change
            </button>
          </div>
          {/* Add price history table here */}
        </section>
        <section className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">CMA&apos;s</h2>
          {/* Add CMA content here */}
        </section>
        <section className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Concessions</h2>
            <button className="bg-blue-600 text-white px-3 py-1 rounded">
              Submit a Concession
            </button>
          </div>
          {/* Add concessions content here */}
        </section>
      </div>

      {/* Seventh section: Showing Feedback */}
      <section className="bg-white rounded-lg shadow mb-6 p-4">
        <h2 className="text-lg font-semibold mb-4">Showing Feedback</h2>
        {/* Add showing feedback table here */}
      </section>
    </div>
  );
}
