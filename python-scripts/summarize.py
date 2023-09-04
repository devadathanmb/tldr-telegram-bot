from transformers import AutoTokenizer, BartForConditionalGeneration
import sys


def generate_summary(input_text):
    model_name = "dippatel11/autotrain-whatsapp_chat_summarization-2331373597"
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = BartForConditionalGeneration.from_pretrained(model_name)

    input_ids = tokenizer.encode(
        input_text, return_tensors="pt", max_length=1024, truncation=True
    )

    summary_ids = model.generate(
        input_ids,
        max_length=150,
        min_length=40,
        length_penalty=2.0,
        num_beams=4,
        early_stopping=True,
    )

    summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
    return summary


if __name__ == "__main__":
    try:
        input_text = sys.argv[1]
        summary = generate_summary(input_text)
        print(summary)
    except:
        print("Error while summarizing the message")
