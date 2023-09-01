<?php

class PHP_Email_Form {
    public $ajax = false;
    public $to = '';
    public $from_name = '';
    public $from_email = '';
    public $subject = '';
    private $message_content = '';

    public function add_message($content, $label, $min_length = 0) {
        $this->message_content .= "$label: $content\n";
    }

    public function send() {
        // Validation
        if (!$this->to || !$this->from_name || !$this->from_email || !$this->subject || !$this->message_content) {
            return "Invalid input. Please fill in the form correctly.";
        }

        $headers = "From: {$this->from_email}" . "\r\n" .
                   "Reply-To: {$this->from_email}" . "\r\n" .
                   'X-Mailer: PHP/' . phpversion();

        if (mail($this->to, $this->subject, $this->message_content, $headers)) {
            return "Your message has been sent. Thank you!";
        } else {
            return "There was an error sending the email.";
        }
    }
}

?>
