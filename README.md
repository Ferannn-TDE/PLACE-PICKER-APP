# PLACE-PICKER-APP

🗺️ PlacePicker App – Summary
The PlacePicker App allows users to create and manage a personal collection of travel destinations. Users can select places they'd like to visit from a list of available options sorted by proximity to their current location. The app also supports removing selected places with a confirmation modal.

🔧 Core Features:
Local Storage Integration: Remembers selected places between sessions.

Geolocation Sorting: Automatically sorts available places by distance using the user's current GPS location.

Place Selection: Adds a place to the “I'd like to visit” list when selected.

Place Removal with Modal: Removes a place from the list using a confirmation modal.

Reusable Components:

Places: Displays a list of places.

Modal: A reusable modal component.

DeleteConfirmation: Modal content asking for delete confirmation.

⚙️ React Hooks Used:
useState: Manages UI states like the modal and picked/available places.

useRef: Tracks the currently selected place for removal.

useEffect: Fetches and sorts places when the app loads.

useCallback: Memoizes the remove function for better performance.

💾 Persistence & Interaction:
Uses localStorage to persist selected places across browser sessions.

Dynamically updates both the UI and stored data when places are added or removed.
