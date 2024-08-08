async function loadJumio() {
    try {
      await import('/node_modules/@jumio/websdk/index.js');
    } catch (error) {
      console.error('Error loading Jumio SDK:', error);
    }
}
  
loadJumio();