const { GoogleGenAI } = require("@google/genai");

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});

async function compareResume(resumeContent, jdContent) {
  const prompt = `Compare the following candidate resume with the job description and provide the JSON analysis.

                    Job Description:
                    ${jdContent}

                    Candidate Resume:
                    ${resumeContent}
                    `

  try {
    const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    config: {
      systemInstruction: `
                    You are an AI-powered Resume Screening Assistant. 
                        Your task is to compare a candidate's resume with the given job description and produce a valid JSON output with the following keys:

                        - "matchPercentage": number (0-100)
                        - "strengths": array of strings
                        - "gaps": array of strings
                        - "improvementSuggestions": array of strings

                        Return ONLY the JSON. Do NOT include any markdown, backticks, or extra commentary.

                        Here are examples of how you should respond:

                        Example 1:
                        Job Description: "Looking for a JavaScript developer with React experience."
                        Resume: "Candidate knows JavaScript, Node.js, and React."
                        Output:
                        {
                        "matchPercentage": 90,
                        "strengths": ["JavaScript knowledge", "React experience"],
                        "gaps": ["No Node.js professional experience mentioned"],
                        "improvementSuggestions": ["Gain more Node.js hands-on projects"]
                        }

                        Example 2:
                        Job Description: "Looking for a Data Analyst familiar with Python and SQL."
                        Resume: "Candidate knows Python and Excel."
                        Output:
                        {
                        "matchPercentage": 70,
                        "strengths": ["Python knowledge"],
                        "gaps": ["SQL experience missing", "Excel may not fully match JD"],
                        "improvementSuggestions": ["Learn SQL and database querying"]
                        }

                        Always respond strictly in this JSON format. Do NOT include backticks, markdown, or any additional text.


      `
    },
    contents: prompt,
  })

    let result;

    console.log("AI Response : ", response.text)

    try {
        result = JSON.parse(response.text)
    } catch (error) {
         console.error("JSON parse error:", error.message);
            result = {
                matchPercentage: 0,
                strengths: [],
                gaps: [],
                improvementSuggestions: [],
                summary: "Failed to parse AI response"
            }
    }

    return result

  } catch (error) {
    console.error("AI service failed:", error.message);
        return {
            matchPercentage: 0,
            strengths: [],
            gaps: [],
            improvementSuggestions: [],
            summary: "AI service failed"
        }
  }

 
}

module.exports = { compareResume };
