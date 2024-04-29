
export const fetchNotionPageData = async (pageID: string): Promise<string> => {
  try {
    const data = await fetch(
      `https://notion-api.splitbee.io/v1/page/${pageID}`
    );
    console.log(data);
    return "success"
  } catch (error) {
    console.error(error);
    return "error";
  }
}
