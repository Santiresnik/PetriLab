interface EmailInputProps {
    onChangeValue: (email: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ onChangeValue }) => {
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeValue(e.target.value);
    };

    return (
        <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
            Email
        </label>
        <input
            type="email"
            id="email"
            placeholder="petrilab@example.com"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-txtbox_bg_color border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            onChange={handleEmailChange}
            required
        />
        </div>
    );
};

export default EmailInput;