from PIL import Image
import numpy as np
import os

def remove_whitespace(input_path, output_path, threshold=250):
    """
    Remove whitespace from an image by cropping to the bounding box of non-white pixels.
    """
    # Open the image
    img = Image.open(input_path)
    
    # Convert to RGB
    if img.mode != 'RGB':
        img = img.convert('RGB')
    
    # Convert to numpy array
    img_array = np.array(img)
    
    # Find rows and columns that contain non-white pixels
    # A pixel is considered non-white if any of its RGB values is below the threshold
    non_white_rows = np.where(np.any(img_array < threshold, axis=(1, 2)))[0]
    non_white_cols = np.where(np.any(img_array < threshold, axis=(0, 2)))[0]
    
    if len(non_white_rows) > 0 and len(non_white_cols) > 0:
        # Get bounding box
        top = non_white_rows[0]
        bottom = non_white_rows[-1] + 1
        left = non_white_cols[0]
        right = non_white_cols[-1] + 1
        
        # Crop the image
        cropped = img.crop((left, top, right, bottom))
        
        # Save the cropped image
        cropped.save(output_path, 'PNG')
        print(f"✓ Logo cropped successfully!")
        print(f"  Original size: {img.size}")
        print(f"  Cropped size: {cropped.size}")
        print(f"  Removed: {left}px left, {top}px top, {img.size[0]-right}px right, {img.size[1]-bottom}px bottom")
        print(f"  Saved to: {output_path}")
        return True
    else:
        print("No non-white pixels found in the image.")
        return False

if __name__ == "__main__":
    # Define paths
    input_logo = "public/careflowos-logo.png"
    output_logo = "public/careflowos-logo-cropped.png"
    
    # Check if input file exists
    if not os.path.exists(input_logo):
        print(f"Error: {input_logo} not found!")
        print("Please make sure the logo file is in the public folder.")
    else:
        # Remove whitespace
        remove_whitespace(input_logo, output_logo)
        print(f"\nYou can now replace the original logo with the cropped version:")
        print(f"  mv {output_logo} {input_logo}")
