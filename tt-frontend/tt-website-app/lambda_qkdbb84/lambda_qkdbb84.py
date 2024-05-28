# bb84_simulation.py
# Standard library imports
import json
import sys

# Third party imports
from qiskit import Aer
#from qiskit_ibm_provider import IBMProvider

# Local application imports
sys.path.append('.')
from src.utils.bb84_protocol import bb84_protocol
from src.classical.error_correction import cascade_correct
from src.classical.key_validation import check_errors
from src.utils.xor_encryption import encrypt, decrypt

def lambda_handler(event, context):
    num_qubits = event['num_qubits']
    noise_measurement = event.get('noise_measurement', 0)
    eve = event.get('eve', 0)
    error_rate = event.get('error_rate', 0.1)

    backend = Aer.get_backend('qasm_simulator')
    alice_key, bob_key, eve_key = bb84_protocol(num_qubits, backend, noise_measurement, eve, error_rate)


    # Output the results
    print("Alice's key: ", alice_key)
    print("Bob's key:   ", bob_key)
    check_errors(alice_key, bob_key, list(range(len(alice_key))))
    print("Eve's key:   ", eve_key)

    # Error correction
    bob_key_corrected = cascade_correct(alice_key, bob_key)
    print("Bob's corrected key: ", bob_key_corrected)
    check_errors(alice_key, bob_key_corrected, list(range(len(alice_key))))

    # Comunication Model 
    alice_message = "A super secret message"
    print("Alice's message: ", alice_message)
    alice_encrypted = encrypt(alice_message, str(alice_key))
    print("Alice's encrypted message: ", alice_encrypted)

    bob_decrypted = decrypt(alice_encrypted, str(bob_key_corrected))
    print("Bob's decrypted message: ", bob_decrypted)

    return {
        'statusCode': 200,
        'body': json.dumps({
            'Alice': alice_key,
            'Bob': bob_key,
            'Eve': eve_key,
            'Bob_corrected': bob_key_corrected,
            'Alice_message': alice_message,
            'Alice_encrypted': alice_encrypted,
            'Bob_decrypted': bob_decrypted
        })
    }
