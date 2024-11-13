// JavaScript code for calculator functions

// Appends a value to the display
function appendValue(value) {
    document.calcy.answers.value += value;
  }
  
  // Clears the display
  function clearDisplay() {
    document.calcy.answers.value = '';
  }
  
  // Calculates and displays the result
  function calculateResult() {
    try {
      // Use Function constructor for a safer evaluation instead of eval()
      const result = new Function('return ' + document.calcy.answers.value)();
      document.calcy.answers.value = result;
    } catch (error) {
      document.calcy.answers.value = 'Error';
    }
  }
  