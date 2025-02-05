const agents = [
  {
    name: "Nelson Muriithi",
    county: "nairobi",
    email: "muriithinelson@gmail.com",
    phone: "0712345678",
  },
  {
    name: "Albert Byrone",
    county: "kisumu",
    email: "albertbyrone@gmail.com",
    phone: "0723456789",
  },
  {
    name: "Erick Jeremy",
    county: "mombasa",
    email: "erickjeremy@gmail.com",
    phone: "0734567890",
  },
  {
    name: "Oscar Somba",
    county: "nairobi",
    email: "sombaoscar@gmail.com",
    phone: "0745678901",
  },
];

document.getElementById("tenant-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const tenantName = document.getElementById("tenant-name").value;
  const tenantEmail = document.getElementById("tenant-email").value;
  const tenantPhone = document.getElementById("tenant-phone").value;
  const county = document.getElementById("county").value;

  alert(
    `Tenant Registered: ${tenantName}, ${tenantEmail}, ${tenantPhone}, ${county}`
  );
});

document.getElementById("agent-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const agentName = document.getElementById("agent-name").value;
  const agentEmail = document.getElementById("agent-email").value;
  const agentPhone = document.getElementById("agent-phone").value;
  const agentCounty = document.getElementById("agent-county").value;

  alert(
    `Agent Registered: ${agentName}, ${agentEmail}, ${agentPhone}, ${agentCounty}`
  );
});

document.getElementById("search-agents").addEventListener("click", function () {
  const countySearch = document.getElementById("county-search").value;

  const filteredAgents = agents.filter(
    (agent) => agent.county === countySearch
  );

  const agentListContainer = document.getElementById("agent-list");
  agentListContainer.innerHTML = "";

  if (filteredAgents.length > 0) {
    filteredAgents.forEach((agent) => {
      const agentDiv = document.createElement("div");
      agentDiv.classList.add("agent");
      agentDiv.innerHTML = `
        <h3>${agent.name}</h3>
        <p>Email: ${agent.email}</p>
        <p>Phone: ${agent.phone}</p>
      `;
      agentListContainer.appendChild(agentDiv);
    });
  } else {
    agentListContainer.innerHTML = "<p>No agents found in this county.</p>";
  }
});
