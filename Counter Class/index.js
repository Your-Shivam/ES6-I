class Counter {
    constructor() {
      this.value = 0;
      this.intervalId = null;
      this.isAutoIncrementing = false;
    }

    startAutoIncrement() {
      this.isAutoIncrementing = true;
      this.intervalId = setInterval(() => {
        this.increment();
        this.updateDisplay();
      }, 1000);
    }

    stopAutoIncrement() {
      this.isAutoIncrementing = false;
      clearInterval(this.intervalId);
    }

    increment() {
      this.value++;
    }

    decrement() {
      this.value--;
    }

    updateDisplay() {
      document.getElementById('counter').innerText = this.value;
    }
  }

  const counter = new Counter();

  document.getElementById('toggleButton').addEventListener('click', () => {
    if (counter.isAutoIncrementing) {
      counter.stopAutoIncrement();
      document.getElementById('toggleButton').innerText = 'Start';
    } else {
      counter.startAutoIncrement();
      document.getElementById('toggleButton').innerText = 'Stop';
    }
  });

  document.getElementById('incrementButton').addEventListener('click', () => {
    counter.stopAutoIncrement();
    counter.increment();
    counter.updateDisplay();
  });

  document.getElementById('decrementButton').addEventListener('click', () => {
    counter.stopAutoIncrement();
    counter.decrement();
    counter.updateDisplay();
  });