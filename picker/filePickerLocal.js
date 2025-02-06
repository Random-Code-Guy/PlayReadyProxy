import { SettingsManager } from "../../util.js";

document
    .getElementById("fileInput")
    .addEventListener("change", async (event) => {
        const file = event.target.files[0];
        try {
            await SettingsManager.loadLocalCDM(file);
            window.close();
        } catch (error) {
            console.error("Error loading local CDM:", error);
        }
    });
