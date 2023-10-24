package org.ram.helloworld;

public class Helloworldbean {
		private String message;

		public Helloworldbean(String message) {
			this.message = message;
		}

		public String getMessage() {
			return message;
		}

		public void setMessage(String message) {
			this.message = message;
		}

		@Override
		public String toString() {
			return "Helloworldbean [message=" + message + "]";
		}
	}

	

