import { getUsers } from "../js/users.js";

export function renderProjectModal() {
    const users = getUsers();
  return `
    <div class="modal-overlay" id="projectModal">
      <div class="modal">

        <div class="modal-header">
          <h2>Create Project</h2>
          <button id="closeModalBtn" class="close-btn">✕</button>
        </div>

        <form id="projectForm" class="modal-form">

          <!-- Basic Info -->
          <div class="form-group">
            <label>Project Name</label>
            <input type="text" name="name" placeholder="Enter project name" required />
          </div>

          <div class="form-group">
            <label>Project URL</label>
            <input type="url" name="url" placeholder="https://example.com" required />
          </div>

          <div class="form-group">
            <label>Main Folder Link</label>
            <input type="text" name="folder" placeholder="Drive / Folder link" />
          </div>

          <!-- Grid Fields -->
          <div class="form-row">

            <div class="form-group">
              <label>DAM</label>
              <select name="dam">
                <option value="">Select</option>
                <option value="Ali">Ali</option>
                <option value="Lachie">Lachie</option>
                <option value="Prashama">Prashama</option>
                <option value="IND">IND</option>
              </select>
            </div>

            <div class="form-group">
              <label>Assign</label>
              <select name="assignedTo" required>
                <option value="">Select</option>
                ${users.map(u => `
                    <option value="${u.email}">
                    ${u.name}
                    </option>
                `).join("")}
                </select>
            </div>

          </div>

          <div class="form-row">

            <div class="form-group">
              <label>Project Priority</label>
              <select name="priority">
                ${[1,2,3,4,5].map(p => `<option value="${p}">${p}</option>`).join("")}
              </select>
            </div>

            <div class="form-group">
              <label>Content Priority</label>
              <select name="contentPriority">
                ${[1,2,3,4,5].map(p => `<option value="${p}">${p}</option>`).join("")}
              </select>
            </div>

          </div>

          <!-- Actions -->
          <div class="modal-actions">
            <button type="button" id="cancelProjectBtn" class="btn-secondary">Cancel</button>
            <button type="submit" class="btn-primary">Create Project</button>
          </div>

        </form>

      </div>
    </div>
  `;
}