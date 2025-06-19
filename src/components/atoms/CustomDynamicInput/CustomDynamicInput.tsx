import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  KeyboardTypeOptions,
  TouchableOpacity,
} from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { COLOR } from "~/utils/Color/Color"; // Using Feather icons from react-native-vector-icons

// Updated validation types to include 'password'
type ValidationType =
  | "default" // No specific validation
  | "email" // Email format validation
  | "phone" // 10-digit phone number
  | "required" // Must not be empty
  | "optional" // Can be empty
  | "number" // Numeric input only
  | "text" // Text-only input (alphabetic characters)
  | "password" // Password validation
  | "pincode" // 6-digit pincode
  | "month" // Month number (1-12)
  | "ifsc" // IFSC code format
  | "bankAccount" // Bank account number (up to 30 digits)
  | "abhaNumber"; // ABHA Number validation

// Password strength levels
type PasswordStrength = "weak" | "moderate" | "strong" | "none";

// Props interface updated to include password-specific props
interface CustomDynamicInputProps extends TextInputProps {
  label: string;
  setFunction: (value: any) => void;
  placeholder: string;
  validationType: ValidationType;
  customValidation?: (value: string) => boolean;
  optionalTextVisible?: boolean;
  required: boolean;
  value?: string;
  maximumNumber?: number;
  minimumNumber?: number;
  minPasswordLength?: number; // Minimum length for password
  showPasswordStrength?: boolean; // Whether to show password strength indicator
}

const CustomDynamicInput: React.FC<CustomDynamicInputProps> = ({
  label,
  setFunction,
  validationType = "default",
  customValidation,
  required = false,
  optionalTextVisible = false,
  placeholder,
  value: propValue,
  maximumNumber,
  minimumNumber,
  minPasswordLength = 8, // Default minimum password length
  showPasswordStrength = true, // Default to showing password strength
  ...restProps
}) => {
  const [value, setValue] = useState<string>(propValue || "");
  const [error, setError] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [passwordStrength, setPasswordStrength] =
    useState<PasswordStrength>("none");

  useEffect(() => {
    if (propValue !== value) {
      setValue(propValue || "");
    }
  }, [propValue]);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Check password strength
  const checkPasswordStrength = (password: string): PasswordStrength => {
    if (!password) return "none";

    // Check length
    if (password.length < minPasswordLength) return "weak";

    // Define patterns for different criteria
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    // Count the number of criteria met
    const criteriaCount = [
      hasLowercase,
      hasUppercase,
      hasNumber,
      hasSpecial,
    ].filter(Boolean).length;

    if (criteriaCount <= 2) return "weak";
    if (criteriaCount === 3) return "moderate";
    return "strong";
  };

  // Function to get color based on password strength
  const getPasswordStrengthColor = (): string => {
    switch (passwordStrength) {
      case "weak":
        return "red";
      case "moderate":
        return "orange";
      case "strong":
        return "green";
      default:
        return "transparent";
    }
  };

  // Updated getKeyboardType to include password
  const getKeyboardType = (): KeyboardTypeOptions => {
    switch (validationType) {
      case "phone":
      case "number":
      case "pincode":
      case "month":
      case "bankAccount":
        return "numeric";
      case "email":
        return "email-address";
      case "password":
      case "text":
      case "ifsc":
      case "abhaNumber":
      default:
        return "default";
    }
  };

  // Updated validateInput to include password validation
  const validateInput = (text: string): boolean => {
    setError("");

    // Allow empty value for optional fields
    if (!required && !text.trim()) {
      setFunction("");
      return true;
    }

    // Run custom validation if provided
    if (customValidation && !customValidation(text)) {
      setError("Invalid input");
      return false;
    }

    // Type-specific validation
    switch (validationType) {
      case "password":
        if (text.length < minPasswordLength) {
          setError(`Password must be at least ${minPasswordLength} characters`);
          return false;
        }
        break;

      case "text":
        const textRegex = /^[A-Za-z\s]+$/;
        if (!textRegex.test(text)) {
          setError("Only alphabetic characters are allowed");
          return false;
        }
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(text)) {
          setError("Invalid email format");
          return false;
        }
        break;

      case "phone":
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(text)) {
          setError("Invalid phone number (10 digits required)");
          return false;
        }
        break;

      case "pincode":
        const pincodeRegex = /^[0-9]{6}$/;
        if (!pincodeRegex.test(text)) {
          setError("Invalid pincode (6 digits required)");
          return false;
        }
        break;

      case "bankAccount":
        const bankAccountRegex = /^[0-9]{1,30}$/;
        if (!bankAccountRegex.test(text)) {
          setError("Invalid bank account number (maximum 30 digits)");
          return false;
        }
        break;

      case "month":
        const monthNumber = parseInt(text, 10);
        if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 11) {
          setError("Invalid month (must be between 1-11)");
          return false;
        }
        break;

      case "ifsc":
        const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
        if (!ifscRegex.test(text)) {
          setError("Invalid IFSC code (Format: ABCD0XYZ123)");
          return false;
        }
        break;

      case "required":
        if (!text.trim()) {
          setError("This field is required");
          return false;
        }
        break;

      case "number":
        const numValue = Number(text);
        if (isNaN(numValue)) {
          setError("Only numbers are allowed");
          return false;
        }
        if (minimumNumber !== undefined && numValue < minimumNumber) {
          setError(`Number must be at least ${minimumNumber}`);
          return false;
        }
        if (maximumNumber !== undefined && numValue > maximumNumber) {
          setError(`Number must be at most ${maximumNumber}`);
          return false;
        }
        break;

      case "abhaNumber":
        const abhaNumberRegex = /^[0-9]{14}$/;
        if (!abhaNumberRegex.test(text)) {
          setError("Invalid ABHA Number (14 digits required)");
          return false;
        }
        break;

      default:
        break;
    }
    return true;
  };

  // Updated handleChangeText to handle password validation
  const handleChangeText = (text: string) => {
    // Filter input based on validation type
    let filteredText = text;
    switch (validationType) {
      case "phone":
      case "number":
      case "pincode":
      case "month":
        filteredText = text.replace(/[^0-9]/g, "");
        break;
      case "ifsc":
        filteredText = text.toUpperCase().replace(/[^A-Z0-9]/g, "");
        break;
      case "text":
        // Allow only alphabetic characters and spaces
        filteredText = text.replace(/[^A-Za-z\s]/g, "");
        break;
      case "password":
        // For password, remove spaces and update strength
        filteredText = text.replace(/\s/g, "");
        if (showPasswordStrength) {
          setPasswordStrength(checkPasswordStrength(text));
        }
        break;
    }

    setValue(filteredText);

    // Update parent state only if validation passes
    if (validateInput(filteredText)) {
      setFunction(filteredText);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>
          {label}
          {!required ? (
            <>
              {optionalTextVisible && (
                <Text style={styles.optionalLabel}>(Optional)</Text>
              )}
            </>
          ) : (
            <Text style={{ color: "red" }}>*</Text>
          )}
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            error ? styles.inputError : null,
            !required ? styles.optionalInput : null,
            validationType === "password" ? styles.passwordInput : null,
          ]}
          value={value}
          placeholderTextColor={COLOR.placeholderText}
          onChangeText={handleChangeText}
          placeholder={placeholder}
          keyboardType={getKeyboardType()}
          secureTextEntry={validationType === "password" && !passwordVisible}
          {...restProps}
        />

        {validationType === "password" && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.eyeIcon}
          >
            <Icon
              type={IconType.MaterialCommunityIcons}
              name={passwordVisible ? "eye" : "eye-off"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        )}
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      {validationType === "password" &&
        showPasswordStrength &&
        value.length > 0 && (
          // <View style={styles.strengthContainer}>
          //     <View style={styles.strengthBarContainer}>
          //         <View
          //             style={[
          //                 styles.strengthBar,
          //                 {
          //                     backgroundColor: getPasswordStrengthColor(),
          //                     width: passwordStrength === 'weak' ? '33%' :
          //                         passwordStrength === 'moderate' ? '66%' :
          //                             passwordStrength === 'strong' ? '100%' : '0%'
          //                 }
          //             ]}
          //         />
          //     </View>
          //     <Text style={[styles.strengthText, { color: getPasswordStrengthColor() }]}>
          //         {passwordStrength !== 'none' ? `Password strength: ${passwordStrength}` : ''}
          //     </Text>
          // </View>
          <></>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 5,
    width: "98%",
    alignSelf: "center",
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    width: "100%",
  },
  label: {
    fontWeight: "500",
    color: COLOR.black,
    marginRight: 5,
    width: "100%",
    flexWrap: "wrap",
  },
  optionalLabel: {
    color: COLOR.placeholderText,
    fontSize: 12,
  },
  inputContainer: {
    position: "relative",
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: COLOR.Primary1,
    padding: 8,
    borderRadius: 10,
    color: "black",
    backgroundColor: "#fff",
  },
  passwordInput: {
    paddingRight: 40, // Make room for the eye icon
  },
  optionalInput: {
    // borderStyle: 'dashed'
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginTop: 5,
    fontSize: 12,
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -12 }], // Adjust to vertically center
  },
  strengthContainer: {
    marginTop: 5,
  },
  strengthBarContainer: {
    height: 4,
    backgroundColor: "#e0e0e0",
    borderRadius: 2,
    overflow: "hidden",
  },
  strengthBar: {
    height: "100%",
    borderRadius: 2,
  },
  strengthText: {
    fontSize: 12,
    marginTop: 2,
  },
});

export default CustomDynamicInput;
